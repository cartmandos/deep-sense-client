import { useState } from 'react';

import ReportCard from './ReportCard';

const ReportForm = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ReportCard step={step} setStep={setStep} />
    </div>
  );
};

export default ReportForm;
