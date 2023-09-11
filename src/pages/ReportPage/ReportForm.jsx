import { lazy, Suspense, useState, useRef, useEffect } from 'react';

import { BackgroundAnimation, FormButton, ProgressBar } from './layouts';

import { useForm } from './hooks/useForm';

import GeneralInstructions from './forms/GeneralInstructions';
const DiverGeneralInfo = lazy(() => import('./forms/DiverGeneralInfo'));
const IncidentGeneralInfo = lazy(() => import('./forms/IncidentGeneralInfo'));
const IncidentInfo = lazy(() => import('./forms/IncidentInfo'));
const AppendixInfo = lazy(() => import('./forms/AppendixInfo'));

//TODO: 1. polish UI colors 2. fix bubbles animation 3. fix form size 4. extract form page component
export const ReportForm = () => {
  /**
   * @typedef {Object} FORM_PAGES
   * @property {string} label
   * @property {JSX.Element} page
   * @readonly
   */
  const FORM_PAGES = {
    'Diver General Info': DiverGeneralInfo,
    'Incident Details': IncidentGeneralInfo,
    'More Details': IncidentInfo,
    'Appendix Info': AppendixInfo,
  };

  // const [showAnimation, setShowAnimation] = useState(false);
  const [step, setStep] = useState(0);
  const [formPages, setFormPages] = useState(FORM_PAGES);
  const formPageRefs = useRef([]);

  const { formData } = useForm();

  useEffect(() => {
    formPageRefs.current[step]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [step]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // const handlePrevious = () => {
  //   setStep((prevStep) => prevStep - 1);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ContinueButton = () => {
    return <FormButton label="Continue" onClick={handleNext} />;
  };

  return (
    <div className="flex h-full">
      <form
        className="mx-4 h-full w-2/3 rounded bg-main-gray-light shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto my-2 h-full p-2">
          <GeneralInstructions />
          <Suspense fallback={<div>Loading...</div>}>
            {step > 0 &&
              Object.entries(formPages).map(([label, FormPage], index) => (
                <div
                  key={label}
                  className={`${index <= step ? 'block' : 'hidden'} ${
                    index === step && 'animate-fade-in'
                  }`}
                  ref={(el) => (formPageRefs.current[index] = el)}
                >
                  <FormPage />
                </div>
              ))}
          </Suspense>

          <div role="group form-control" className="mb-3 flex justify-center">
            {/* {step > 0 && <FormButton label="Previous" onClick={handlePrevious} />} */}

            {step < Object.keys(formPages).length - 1 && <ContinueButton />}
            {step === Object.keys(formPages).length - 1 && (
              <FormButton label="Submit" type="submit" />
            )}
          </div>
        </div>
      </form>

      <div className="relative me-6 ms-auto pe-4 ps-8">
        <ProgressBar labels={Object.keys(formPages)} step={step} />
      </div>
      <BackgroundAnimation />
    </div>
  );
};
