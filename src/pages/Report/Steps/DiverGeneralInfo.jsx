import { useState } from 'react';

import { CERTIFICATION, DISCIPLINE, DIVE_FREQUENCY } from '../../../lib/data/checkboxData';

const GeneralInfo = () => {
  const [units, setUnits] = useState('metric');
  return (
    <div>
      {/* sex */}
      <span className="label-text uppercase">Gender</span>
      <div className="form-control flex-row">
        <label className="label cursor-pointer">
          <input
            value={'male'}
            type="radio"
            name="gender"
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Male</span>
        </label>
        <label className="label cursor-pointer">
          <input
            value={'female'}
            type="radio"
            name="gender"
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Female</span>
        </label>
        <label className="label cursor-pointer">
          <input
            value={'other'}
            type="radio"
            name="gender"
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Other</span>
        </label>
      </div>
      {/* units */}
      <span className="label-text uppercase">Identify Units</span>
      <div className="form-control flex-row">
        <label className="label cursor-pointer">
          <input
            onChange={(e) => setUnits(e.target.value)}
            value={'metric'}
            type="radio"
            name="metric"
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Metric</span>
        </label>
        <label className="label cursor-pointer">
          <input
            onChange={(e) => setUnits(e.target.value)}
            value={'imperial'}
            type="radio"
            name="metric"
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Imperial</span>
        </label>
      </div>

      <div className="flex flex-col">
        {/* height */}
        <div className="form-control">
          <span className="label">Height</span>
          <input
            type="number"
            placeholder={units === 'metric' ? 'cm' : 'ft'}
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
          />
          {/* weight */}
          <span className="label">Weight</span>
          <input
            type="number"
            placeholder={units === 'metric' ? 'kg' : 'lbs'}
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
          />
          {/* age */}
          <span className="label">Age</span>
          <input
            type="number"
            placeholder="92"
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
          />
        </div>
      </div>
      {/* dive discipline */}
      {DISCIPLINE.map((discipline) => {
        return (
          <div key={discipline}>
            <div className="flex">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox-error checkbox border-main-red-dark" />
                <span className="label-text ms-2">{discipline}</span>
              </label>
            </div>
          </div>
        );
      })}
      {/* dive certification */}
      {CERTIFICATION.map((certification) => {
        return (
          <div key={certification}>
            <div className="flex">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox-error checkbox border-main-red-dark" />
                <span className="label-text ms-2">{certification}</span>
              </label>
            </div>
          </div>
        );
      })}
      {/* dive frequncy */}
      {DIVE_FREQUENCY.map((frequency) => {
        return (
          <div key={frequency}>
            <div className="flex">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox-error checkbox border-main-red-dark" />
                <span className="label-text ms-2">{frequency}</span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GeneralInfo;
