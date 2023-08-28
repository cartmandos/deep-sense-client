import { createContext, useState } from 'react';

const FormContext = createContext();

const initailValues = {
  gender: '',
  units: '',
  height: 0,
  weight: 0,
  age: 0,
  discipline: [],
  certification: [],
  frequency: [],
  locationCountry: '',
  locationDiveSite: '',
  date: '',
  type: [],
  involvement: false,
  victim: false,
  diveDescription: 'hihihihihhi',
  incidentDescription: '',
  outcome: '',
  emergencyResponse: '',
  contributeFactors: '',
  lessonsLearned: '',
};
const FormProvider = ({ children }) => {
  const [fromData, setFromData] = useState(initailValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };

  const resetFormValues = () => {
    setFromData(initailValues);
  };

  return (
    <FormContext.Provider
      value={{
        fromData,
        handleChange,
        resetFormValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider };
