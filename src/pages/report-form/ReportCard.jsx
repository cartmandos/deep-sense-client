import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const formSteps = [
  { label: 'infoText', btnText: 'Start Reporting' },
  { label: 'initData' },
  { label: 'data1' },
  { label: 'data2' },
  { label: 'data3' },
  { label: 'summary' },
];

// eslint-disable-next-line react/prop-types
const ReportCard = ({ step, setStep }) => {
  const [btnType, setBtnType] = useState('button');

  useEffect(() => {
    if (step === formSteps.length - 1) setBtnType('submit');
    if (step < formSteps.length - 1) setBtnType('button');
  }, [step]);

  const handleNextSubmitClick = () => {
    if (btnType === 'submit') return handleSubmit();
    console.log(step);
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevClick = () => setStep((prevStep) => prevStep - 1);
  const handleSubmit = () => {};

  return (
    <div className="z-10 h-4/5 w-3/5 rounded bg-slate-100 shadow-xl">
      <Box sx={{ width: '100%', pt: 3 }}>
        <Stepper activeStep={step} alternativeLabel>
          {formSteps.map((label) => (
            <Step key={label.label}>
              <StepLabel>{label.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {step !== 0 && <Button onClick={handlePrevClick}>Previous</Button>}
        <Button onClick={handleNextSubmitClick} type={btnType}>
          {step === formSteps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ReportCard;
