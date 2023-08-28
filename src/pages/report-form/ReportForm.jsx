import { useState } from 'react';

import ReportCard from './ReportCard';
import { FormProvider } from './FormContext';

const ReportForm = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <FormProvider>
        <ReportCard step={step} setStep={setStep} />
      </FormProvider>
    </div>
  );
};

export default ReportForm;
