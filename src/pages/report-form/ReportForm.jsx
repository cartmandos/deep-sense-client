import { useState } from 'react';

import ReportCard from './ReportCard';

const ReportForm = () => {
  const [step, setStep] = useState(0);

  return <ReportCard step={step} setStep={setStep} />;
};

export default ReportForm;
