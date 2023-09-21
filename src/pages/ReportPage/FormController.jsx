import { FormButton, ProgressBar } from './layouts';

const FormController = ({ formPages, step, handleNext, handlePrevious }) => {
  return (
    <div className="m-2 w-1/5 bg-main-gray-light ps-6">
      <div className="flex h-4/5 justify-center">
        <ProgressBar labels={Object.keys(formPages)} step={step} />
      </div>
      <div role="group form-control" className="bottom-0 mb-3 flex justify-center">
        {step > 0 && <FormButton label="previous" onClick={handlePrevious} />}
        {step < Object.keys(formPages).length - 1 ? (
          <FormButton label="continue" onClick={handleNext} />
        ) : (
          <FormButton label="Submit" type="submit" />
        )}
      </div>
    </div>
  );
};

export default FormController;
