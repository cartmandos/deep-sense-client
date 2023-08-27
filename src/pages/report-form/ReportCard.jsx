import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';
import GeneralInstructions from './GeneralInstructions';
import GeneralInfo from './GeneralInfo';
import IncidentCategory from './IncidentCategory';
import IncidentInfo from './IncidentInfo';

const formSteps = [
  { label: 'infoText', btnText: 'Start Reporting' },
  { label: 'initData' },
  { label: 'data1' },
  { label: 'data2' },
  { label: 'data3' },
  { label: 'summary' },
];

const ReportCard = ({ step, setStep }) => {
  const [btnType, setBtnType] = useState('button');

  useEffect(() => {
    if (step === formSteps.length - 1) setBtnType('submit');
    if (step < formSteps.length - 1) setBtnType('button');
  }, [step]);

  const handleNextSubmitClick = () => {
    btnType === 'submit' ? handleSubmit() : setStep((prevStep) => prevStep + 1);
  };
  const handlePrevClick = () => setStep((prevStep) => prevStep - 1);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const stepRenderers = () => {
    switch (step) {
      case 0:
        return <GeneralInstructions />;
      case 1:
        return <GeneralInfo />;
      case 2:
        return <IncidentCategory />;
      case 3:
        return <IncidentInfo />;
    }
  };

  return (
    <div className="z-10 grid h-4/5 w-3/5 grid-rows-[auto_1fr_auto] rounded bg-slate-200 shadow-xl">
      <Box sx={{ width: '100%', pt: 3 }}>
        <Stepper activeStep={step} alternativeLabel>
          {formSteps.map((label) => (
            <Step key={label.label}>
              <StepLabel
                className="uppercase"
                //fix with- https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component
                sx={{
                  '& .MuiSvgIcon-root.Mui-completed': {
                    color: '#952735', // main-red-dark
                  },
                  '& .MuiStepIcon-root.Mui-active': {
                    color: '#be3144', // secondary-red-dark
                  },
                }}
              >
                {label.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <main className="mx-auto my-2 h-[60vh] max-w-2xl bg-slate-50 p-2">{stepRenderers()}</main>
      <ButtonGroup className="mb-3 flex justify-center">
        {step !== 0 && (
          <button
            className="border-b-secondary-red-light hover:border-secondary-red-light me-2 items-center space-x-2 border-2 border-transparent px-3 uppercase hover:border-2 hover:text-red-600"
            onClick={handlePrevClick}
          >
            Previous
          </button>
        )}
        <button
          className="border-b-secondary-red-light hover:border-secondary-red-light items-center space-x-2 border-2 border-transparent px-3 uppercase hover:border-2 hover:text-red-600"
          onClick={handleNextSubmitClick}
          type={btnType}
        >
          {step === formSteps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </ButtonGroup>
    </div>
  );
};

export default ReportCard;
