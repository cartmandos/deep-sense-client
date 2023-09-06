import { useState } from 'react';

import { CERTIFICATION, DISCIPLINE, DIVE_FREQUENCY } from '@lib/data/checkboxData';
import { useFormData } from '../FormContext';

const DiverGeneralInfo = () => {
  const { formData, handleChange } = useFormData();

  return (
    <div>
      {/* units */}
      <span className="label-text uppercase">Identify Units</span>
      <div className="form-control flex-row">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="units"
            value="metric"
            onChange={(e) => handleChange(e)}
            className="radio-error radio me-2 border-main-red-dark"
            checked={formData.units === 'metric' && true}
          />
          <span className="label-text">Metric</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="units"
            value="imperial"
            onChange={(e) => handleChange(e)}
            className="radio-error radio me-2 border-main-red-dark"
            checked={formData.units === 'imperial' && true}
          />
          <span className="label-text">Imperial</span>
        </label>
      </div>
      {/* sex */}
      <span className="label-text uppercase">Gender</span>
      <div className="form-control flex-row">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e)}
            className="radio-error radio me-2 border-main-red-dark"
            checked={formData.gender === 'male' && true}
          />
          <span className="label-text">Male</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e)}
            className="radio-error radio me-2 border-main-red-dark"
            checked={formData.gender === 'female' && true}
          />
          <span className="label-text">Female</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={(e) => handleChange(e)}
            className="radio-error radio me-2 border-main-red-dark"
          />
          <span className="label-text">Other</span>
        </label>
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
            onChange={(e) => handleChange(e)}
          />
          {/* weight */}
          <span className="label">Weight</span>
          <input
            type="number"
            name="weight"
            value={formData.weight !== 0 && formData.weight}
            placeholder={formData.units === 'metric' ? 'kg' : 'lbs'}
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
            onChange={(e) => handleChange(e)}
          />
          {/* age */}
          <span className="label">Age</span>
          <input
            type="number"
            name="age"
            value={formData.age !== 0 && formData.age}
            placeholder="years"
            className="input input-bordered input-error w-full max-w-xs border-main-red-dark"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {/* dive discipline */}
      <div className="mb-5">
        <h4 className="label-text uppercase">Diving discipline</h4>
        <span className="label-text">What kind of diving does the victim practice?</span>
        {DISCIPLINE.map((discipline) => {
          return (
            <div key={discipline}>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    name="discipline"
                    value={discipline}
                    type="radio"
                    className="radio-error radio border-main-red-dark"
                    onChange={(e) => handleChange(e)}
                    checked={formData.discipline === discipline ? true : false}
                  />
                  <span className="label-text ms-2">{discipline}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {/* dive certification */}
      <div className="mb-5">
        <h4 className="label-text uppercase">Dive Certification</h4>
        <span className="label-text">
          What is the victim`s highest recreational dive certification level?
        </span>

        {CERTIFICATION.map((certification) => {
          return (
            <div key={certification}>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    name="certification"
                    value={certification}
                    type="radio"
                    className="radio-error radio border-main-red-dark"
                    onChange={(e) => handleChange(e)}
                    checked={formData.certification === certification ? true : false}
                  />
                  <span className="label-text ms-2">{certification}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>

      {/* dive frequncy */}
      <div className="mb-5">
        <h4 className="label-text uppercase"> Diving Frequency</h4>
        <span className="label-text">How frequently did the victim dive in the last 3 years?</span>
        {DIVE_FREQUENCY.map((frequency) => {
          return (
            <div key={frequency}>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    name="frequency"
                    value={frequency}
                    type="radio"
                    className="radio-error radio border-main-red-dark"
                    onChange={(e) => handleChange(e)}
                    checked={formData.frequency === frequency ? true : false}
                  />
                  <span className="label-text ms-2">{frequency}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiverGeneralInfo;
