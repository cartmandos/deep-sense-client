import FormProvider from './ReportProvider';
import { ReportForm } from './ReportForm';

import ScrollBackgroundWrapper from '@ui/ScrollingColorBackground';

const ReportPage = () => {
  return (
    <ScrollBackgroundWrapper>
      <FormProvider>
        <ReportForm />
      </FormProvider>
    </ScrollBackgroundWrapper>
  );
};

export default ReportPage;
