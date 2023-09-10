import { useState, createContext } from 'react';

const FormContext = createContext();

const defaultValues = {
  gender: '',
  units: '',
  height: 0,
  weight: 0,
  age: 0,
  discipline: '',
  certification: '',
  frequency: '',
  locationCountry: '',
  locationDiveSite: '',
  date: '',
  type: '',
  involvement: false,
  victim: false,
  diveDescription: '',
  incidentDescription: '',
  outcome: '',
  emergencyResponse: '',
  contributeFactors: '',
  lessonsLearned: '',
};

/**
 * @param {{ children: React.ReactNode }} props
 */
export default function FormProvider({ children }) {
  const [formData, setFormData] = useState(defaultValues);

  //NOTE: (bug) converts boolean to string
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //eslint-disable-next-line
  const resetForm = (_e) => {
    setFormData(defaultValues);
  };

  const FormContextProps = {
    formData,
    handleChange,
    resetForm,
  };

  return <FormContext.Provider value={FormContextProps}>{children}</FormContext.Provider>;
}

export {FormContext}
