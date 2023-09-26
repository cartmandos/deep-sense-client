import { lazy, Suspense, useState, useRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useForm } from './hooks/useForm';
import { BackgroundAnimation } from './layouts';
import FormController from './FormController';

import './stepAnimationStyle.css';

import GeneralInstructions from './forms/GeneralInstructions';
const DiverGeneralInfo = lazy(() => import('./forms/DiverGeneralInfo'));
const IncidentGeneralInfo = lazy(() => import('./forms/IncidentGeneralInfo'));
const IncidentInfo = lazy(() => import('./forms/IncidentInfo'));
const AppendixInfo = lazy(() => import('./forms/AppendixInfo'));

//TODO: 1. polish UI colors 2. fix bubbles animation 3. fix form size 4. extract form page component
export const ReportForm = () => {
  /**
   * @typedef {Object} FORM_PAGES1
   * @property {string} label
   * @property {JSX.Element} page
   * @readonly
   */

  const FORM_PAGES = [
    // NOTE: dont think realy need the headline
    { title: 'general instructions', component: <GeneralInstructions /> },
    { title: 'Diver General Info', component: <DiverGeneralInfo /> },
    { title: 'Incident Details', component: <IncidentGeneralInfo /> },
    { title: 'More Details', component: <IncidentInfo /> },
    { title: 'Appendix Info', component: <AppendixInfo /> },
  ];

  const [step, setStep] = useState(0);
  const [formPages, setFormPages] = useState(FORM_PAGES);

  const [currentStep, setCurrentStep] = useState([formPages[0]]);

  // NOTE: i think can be deleted and use the FORM_PAGE only

  const { formData } = useForm();

  const formPageRefs = useRef([]);

  useEffect(() => {
    formPageRefs.current[step]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [step]);

  useEffect(() => {
    setCurrentStep([formPages[step]]);
  }, [step]);

  const handleNext = () => {
    setCurrentStep([]);
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep([]);
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full justify-center overflow-hidden">
      <form
        className="mx-4 flex h-[80vh] w-3/4 rounded bg-main-gray-dark shadow-xl"
        onSubmit={handleSubmit}
      >
        <FormController
          formPages={formPages}
          step={step}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />

        <div className="m-2 w-4/5 bg-main-gray-light py-2">
          <Suspense fallback={<div>Loading...</div>}>
            <TransitionGroup>
              {currentStep.map((page) => (
                <CSSTransition key={page.title} classNames="item" timeout={900}>
                  {formPages[step].component}
                </CSSTransition>
              ))}
            </TransitionGroup>

            {/* <div className="mx-3 h-full  py-2">{formPages[step].component}</div> */}

            {/* {step > 0 &&
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
              ))} */}
          </Suspense>
        </div>
      </form>

      <BackgroundAnimation />
    </div>
  );
};
