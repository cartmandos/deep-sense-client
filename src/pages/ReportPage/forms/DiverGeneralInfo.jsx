import { CERTIFICATION, DISCIPLINE, DIVE_FREQUENCY } from '@lib/data/checkboxData';
import { useForm } from '../hooks/useForm';

const GeneralInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div className="m-5">
      {/* units */}
      <span className="label-text uppercase">Identify Units</span>
      <div className="form-control flex-row">
        <select
          name="units"
          className="select select-ghost select-lg w-full max-w-xs capitalize hover:select-bordered"
        >
          <option value="metric">metric</option>
          <option value="metric">imperial</option>
        </select>
      </div>
      {/* sex */}
      <span className="label-text uppercase">Gender</span>
      <div className="form-control flex-row">
        <select
          name="gender"
          className="select select-ghost select-lg w-full max-w-xs capitalize hover:select-bordered "
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>

      {/* height */}
      <div className="mb-5 flex flex-col">
        <div className="form-control">
          <span className="label">Height</span>
          <input
            type="number"
            name="height"
            value={formData.height !== 0 && formData.height}
            placeholder={formData.units === 'metric' ? 'cm' : 'inches'}
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
            onChange={handleChange}
          />
          {/* weight */}
          <span className="label">Weight</span>
          <input
            type="number"
            name="weight"
            value={formData.weight !== 0 && formData.weight}
            placeholder={formData.units === 'metric' ? 'kg' : 'lbs'}
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
            onChange={handleChange}
          />
          {/* age */}
          <span className="label">Age</span>
          <input
            type="number"
            name="age"
            value={formData.age !== 0 && formData.age}
            placeholder="years"
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* dive discipline */}
      <div className="form-control mb-5">
        <h4 className="label-text uppercase">Diving discipline</h4>
        <span className="label-text">What kind of diving does the victim practice?</span>
        <select
          name="discipline"
          className="select select-ghost select-lg w-full max-w-xs capitalize hover:select-bordered "
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
      <div className="form-control mb-5">
        <h4 className="label-text uppercase">Dive Certification</h4>
        <span className="label-text">
          What is the victim`s highest recreational dive certification level?
        </span>
        <select
          name="certification"
          className="select select-ghost select-lg w-full max-w-xs capitalize hover:select-bordered "
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
      <div className="form-control mb-5 ">
        <h4 className="label-text uppercase"> Diving Frequency</h4>
        <span className="label-text">How frequently did the victim dive in the last 3 years?</span>
        <select
          name="frequency"
          className="select select-ghost select-lg w-full max-w-xs capitalize hover:select-bordered "
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
