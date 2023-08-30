import { lazy, Suspense, useState, useRef, useEffect } from 'react';

import { BackgroundAnimation, FormButton, ProgressBar } from './layouts';

const GeneralInstructions = lazy(() => import('./Steps/GeneralInstructions'));
const GeneralInfo = lazy(() => import('./Steps/DiverGeneralInfo'));
const IncidentGeneralInfo = lazy(() => import('./Steps/IncidentGeneralInfo'));
const IncidentInfo = lazy(() => import('./Steps/IncidentInfo'));

/**
 * @typedef {Object} formPages
 */
const FORM_PAGES = {
  Welcome: <GeneralInstructions />,
  'Basic Info': <GeneralInfo />,
  'Incident Details': <IncidentGeneralInfo />,
  'More Details': <IncidentInfo />,
  // "Appendix": <Appendix />,
};

const BgColors = ['#ffffff', '#f2f2f2', '#e6e6e6', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3'];

/**
 * @property {number} step
 * @property {function} setStep
 */
export default function ReportCard({ step, setStep }) {
  // const [showAnimation, setShowAnimation] = useState(false);
  const [formPages, setFormPages] = useState(FORM_PAGES);
  const formPageRefs = useRef([]);

  useEffect(() => {
    formPageRefs.current[step]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [step]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="flex h-full" style={{ backgroundColor: BgColors[step] }}>
      <div className="mx-4 h-full w-2/3 rounded bg-main-gray-light shadow-xl">
        <div className="form-card mx-auto my-2 p-2" style={{ backgroundColor: BgColors[step + 2] }}>
          <Suspense fallback={<div className="form-page">Loading...</div>}>
            {Object.entries(formPages).map(([label, page], index) => (
              <div
                key={label}
                className={`form-page ${index <= step ? 'block' : 'hidden'} ${
                  index === step && 'animate-fade-in'
                } ${index === step - 1 && 'animate-fade-out'}`}
                style={{ backgroundColor: BgColors[step + 1] }}
                ref={(el) => (formPageRefs.current[index] = el)}
              >
                {page}
              </div>
            ))}
          </Suspense>
        </div>

        <div role="group" className="mb-3 flex justify-center">
          {step > 0 && <FormButton label="Previous" onClick={handlePrevious} />}

          {step < Object.keys(formPages).length - 1 ? (
            <FormButton label="Next" onClick={handleNext} />
          ) : (
            <FormButton label="Submit" onClick={handleSubmit} type="submit" />
          )}
        </div>
      </div>

      <div className="relative me-6 ms-auto pe-4 ps-8">
        <BackgroundAnimation />
        <ProgressBar labels={Object.keys(formPages)} step={step} />
      </div>
    </div>
  );
}
