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
    btnType === 'submit' ? handleSubmit() : setStep((prevStep) => prevStep + 1);
  };
  const handlePrevClick = () => setStep((prevStep) => prevStep - 1);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="z-10 grid h-4/5 w-3/5 grid-rows-[auto_1fr_auto] rounded bg-slate-200 shadow-xl">
      <Box sx={{ width: '100%', pt: 3 }}>
        <Stepper activeStep={step} alternativeLabel>
          {formSteps.map((label) => (
            <Step key={label.label}>
              <StepLabel>{label.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <main className="mx-auto my-2 max-w-2xl overflow-scroll bg-slate-50 p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quam facere. Magni
          optio soluta deserunt corporis, dignissimos velit. Ipsum maxime suscipit adipisci tempore
          iste totam id cupiditate non consectetur mollitia dignissimos excepturi sit minus quod
          illum odio, aperiam quaerat, laboriosam cum. Illum dolor dolore distinctio repellendus
          quia omnis quasi.
        </p>
      </main>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        className="mx-auto mb-4 mt-2"
      >
        {step !== 0 && <Button onClick={handlePrevClick}>Previous</Button>}
        <Button onClick={handleNextSubmitClick} type={btnType}>
          {step === formSteps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ReportCard;
