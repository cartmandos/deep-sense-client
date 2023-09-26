import { CERTIFICATION, DISCIPLINE, DIVE_FREQUENCY } from '@lib/data/checkboxData';
import { useForm } from '../hooks/useForm';

const GeneralInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div className="m-5">
      {/* units */}
      <div className="flex flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h4 className="label-text uppercase">Identify Units</h4>
          </div>
          <select
            name="units"
            className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
            onChange={handleChange}
          >
            <option value="metric">metric</option>
            <option value="metric">imperial</option>
          </select>
        </div>

        {/* sex */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h4 className="label-text uppercase">gender</h4>
          </div>

          <select
            name="gender"
            className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
      </div>

      {/* height */}
      <div className="mb-5 flex flex-col justify-between">
        {/* <div className="form-control"> */}

        <div className="mb-5 flex items-center justify-between">
          <span className="label-text uppercase">Height</span>
          <input
            type="number"
            name="height"
            value={formData.height !== 0 && formData.height}
            placeholder={formData.units === 'metric' ? 'cm' : 'inches'}
            className="input input-bordered input-ghost input-lg w-1/3 max-w-xs border-0  border-b-2 border-gray-400 hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
            onChange={handleChange}
          />
        </div>
        {/* weight */}
        <div className="mb-5 flex items-center justify-between">
          <span className="label-text uppercase">Weight</span>
          <input
            type="number"
            name="weight"
            value={formData.weight !== 0 && formData.weight}
            placeholder={formData.units === 'metric' ? 'kg' : 'lbs'}
            className="input input-bordered input-ghost input-lg w-1/3 max-w-xs border-0 border-b-2  border-gray-400 hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
            onChange={handleChange}
          />
        </div>
        {/* age */}
        <div className="mb-5 flex items-center justify-between">
          <span className="label-text uppercase">Age</span>
          <input
            type="number"
            name="age"
            value={formData.age !== 0 && formData.age}
            placeholder="years"
            className="input input-bordered input-ghost input-lg w-1/3 max-w-xs border-0 border-b-2 border-gray-400 hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
            onChange={handleChange}
          />
        </div>
        {/* </div> */}
      </div>
      {/* dive discipline */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Diving discipline</h4>
          <span className="label-text">What kind of diving does the victim practice?</span>
        </div>
        <select
          name="discipline"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
          onChange={handleChange}
        >
          {DISCIPLINE.map((discipline) => {
            return (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
              //         onChange={handleChange}
              //         checked={formData.discipline === discipline ? true : false}
            );
          })}
        </select>
      </div>
      {/* dive certification */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Dive Certification</h4>
          <span className="label-text">
            What is the victim`s highest recreational dive certification level?
          </span>
        </div>
        <select
          name="certification"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
        >
          {CERTIFICATION.map((certification) => {
            return (
              <option key={certification} value={certification}>
                {certification}
              </option>
              //         onChange={handleChange}
              //         checked={formData.discipline === discipline ? true : false}
            );
          })}
        </select>
      </div>

      {/* dive frequncy */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase"> Diving Frequency</h4>
          <span className="label-text">
            How frequently did the victim dive in the last 3 years?
          </span>
        </div>
        <select
          name="frequency"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
        >
          {DIVE_FREQUENCY.map((frequency) => {
            return (
              <option key={frequency} value={frequency}>
                {frequency}
              </option>
              //         onChange={handleChange}
              //         checked={formData.discipline === discipline ? true : false}
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GeneralInfo;
