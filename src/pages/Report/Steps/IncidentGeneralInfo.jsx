import { INCIDENT_TYPE } from '@lib/data/checkboxData';
import { useForm } from '../hooks/useForm';

const IncidentGeneralInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div>
      {/* location - country */}
      <span className="label  uppercase">Incident Location - country</span>
      <input
        type="text"
        name="locationCountry"
        value={formData.locationCountry}
        placeholder="Type here"
        className="input input-bordered input-secondary mb-4 w-full max-w-xs"
        onChange={handleChange}
      />
      {/* location - dive site */}
      <span className="label  uppercase">Incident Location - dive site</span>
      <input
        type="text"
        name="locationDiveSite"
        value={formData.locationDiveSite}
        placeholder="Type here"
        className="input input-bordered input-secondary mb-4 w-full max-w-xs"
        onChange={handleChange}
      />
      {/* date */}
      <span className="label uppercase">Incident Date</span>
      <input
        type="date"
        name="date"
        value={formData.date}
        className="input input-bordered input-secondary mb-4 w-full max-w-xs"
        onChange={handleChange}
      />
      {/* type - radio */}

      <div className="form-control mb-3">
        <h4 className="label-text uppercase">Incident Type</h4>
        <span className="label-text">What type of incident would you like to report?</span>
        {INCIDENT_TYPE.map((type) => {
          return (
            <div key={type}>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    className="radio-error radio border-main-red-dark"
                    onChange={handleChange}
                    checked={formData.type === type ? true : false}
                  />
                  <span className="label-text ms-2">{type}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {/* involvment */}
      <span className="label-text uppercase">Incident Inolvment</span>
      <div className="flex">
        <div className="form-control mb-4 flex-row">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="involvement"
              value={true}
              className="radio-error radio me-2 border-main-red-dark"
              onChange={handleChange}
              checked={formData.involvement}
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="mb- label cursor-pointer">
            <input
              type="radio"
              name="involvement"
              value={false}
              className="radio-error radio me-2 border-main-red-dark"
              onChange={handleChange}
              checked={formData.involvement}
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
      {/* victim */}
      <span className="label-text uppercase">Victim</span>
      <div className="flex">
        <div className="form-control flex-row">
          <label className="mb- label cursor-pointer">
            <input
              type="radio"
              name="victim"
              value={true}
              className="radio-error radio me-2 border-main-red-dark"
              onChange={handleChange}
              checked={formData.victim}
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="victim"
              value={false}
              className="radio-error radio me-2 border-main-red-dark"
              onChange={handleChange}
              checked={formData.victim}
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IncidentGeneralInfo;
