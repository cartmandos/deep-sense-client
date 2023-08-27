import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

const GeneralInfo = () => {
  return (
    <div className="p-3">
      {/* sex */}
      <span className="label-text uppercase">Gender</span>
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Male</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Female</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Other</span>
          </label>
        </div>
      </div>
      {/* units */}
      <span className="label-text uppercase">Identify Units</span>
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Metric</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Imperial</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col ">
        {/* height */}
        <div className="form-control">
          <span className="label">Height</span>
          <input
            type="number"
            placeholder="Cm" // need to be changed according to units
            className="input input-bordered input-error w-full max-w-xs"
          />
          <span className="label">Weight</span>
          <input
            type="number"
            placeholder="Kg" // need to be changed according to units
            className="input input-bordered input-error w-full max-w-xs"
          />
          <span className="label">Age</span>
          <input
            type="number"
            placeholder="92" // need to be changed according to units
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
      </div>
      {/* dive discipline */}
      {/* dive certification */}
      {/* dive frequncy */}
    </div>
  );
};

export default GeneralInfo;
