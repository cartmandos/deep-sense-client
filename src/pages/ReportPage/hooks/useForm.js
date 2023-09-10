import { useContext } from 'react';

import { FormContext } from '../ReportProvider';

export const useForm = () => {
  return useContext(FormContext);
};
