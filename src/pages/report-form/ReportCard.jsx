// import { useEffect, useState } from 'react';

import { GeneralInstructions, GeneralInfo, IncidentInfo, IncidentGeneralInfo } from './Steps';
import BackgroundAnimation from './BackgroundAnimation';

const formSteps = [
  { label: 'Welcome' },
  { label: 'Basic Info' },
  { label: 'Incident Details' },
  { label: 'More Details' },
  { label: 'Appendix' },
  { label: 'Summary' },
];

const ReportCard = ({ step, setStep }) => {
  // const [showAnimation, setShowAnimation] = useState(false);

  const handleNext = () => setStep((prevStep) => prevStep + 1);

  const handlePrevious = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const stepRenderers = () => {
    switch (step) {
      case 0:
        return <GeneralInstructions />;
      case 1:
        return <GeneralInfo />;
      case 2:
        return <IncidentInfo />;
      case 3:
        return <IncidentGeneralInfo />;
      default:
        return <></>;
    }
  };

  return (
    <div className="flex h-full ">
      <div className="bg-main-gray-light mx-4 h-full w-2/3 rounded shadow-xl">
        <div className="form-card mx-auto my-2 bg-slate-50 p-2">{stepRenderers()}</div>

        <div role="group" className="mb-3 flex justify-center">
          {step > 0 && <FormButton label="Previous" onClick={handlePrevious} />}

          {step < formSteps.length - 1 ? (
            <FormButton label="Next" onClick={handleNext} />
          ) : (
            <FormButton label="Submit" onClick={handleSubmit} type="submit" />
          )}
        </div>
      </div>

      <div className="relative me-4 ms-auto pe-4 ps-8">
        <BackgroundAnimation />
        <ProgressBar step={step} />
      </div>
    </div>
  );
};

export default ReportCard;

const ProgressBar = ({ step }) => {
  return (
    <ul className="steps steps-vertical">
      {formSteps.map(({ label }, index) => (
        <li
          className={`step ${
            index < step ? 'step-success' : index === step ? 'step-primary' : 'step-neutral'
          }`}
          key={label}
          data-content={`${index < step ? '✓' : index + 1}`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

const FormButton = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      className="border-b-secondary-red-light hover:border-secondary-red-light items-center space-x-2 border-2 border-transparent px-3 uppercase hover:border-2 hover:text-red-600"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
