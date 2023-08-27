import { useState } from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import ReportCard from './ReportCard';

const ReportForm = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <BackgroundAnimation />
      <ReportCard step={step} setStep={setStep} />
    </div>
  );
};

export default ReportForm;
