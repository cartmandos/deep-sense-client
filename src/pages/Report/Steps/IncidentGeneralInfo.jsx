import { INCIDENT_TYPE } from '@lib/data/checkboxData';

const IncidentGeneralInfo = () => {
  return (
    <>
      {/* location - country */}
      <span className="label  uppercase">Incident Location - country</span>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary mb-2 w-full max-w-xs"
      />
      {/* location - dive site */}
      <span className="label  uppercase">Incident Location - dive site</span>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary mb-2 w-full max-w-xs"
      />
      {/* date */}
      <span className="label uppercase">Incident Date</span>
      <input type="date" className="input input-bordered input-secondary mb-2 w-full max-w-xs" />
      {/* type - checkbox */}
      <div className="form-control">
        {INCIDENT_TYPE.map((type) => {
          return (
            <div key={type}>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox-error checkbox border-main-red-dark" />
                  <span className="label-text ms-2">{type}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {/* involvement */}
      <span className="label-text uppercase">Incident Involvement</span>
      <div className="flex">
        <div className="form-control flex-row">
          <label className="label cursor-pointer">
            <input
              value={true}
              type="radio"
              name="involvement"
              className="radio-error radio me-2 border-main-red-dark"
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="label cursor-pointer">
            <input
              value={false}
              type="radio"
              name="involvement"
              className="radio-error radio me-2 border-main-red-dark"
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
      {/* victim */}
      <span className="label-text uppercase">Victim</span>
      <div className="flex">
        <div className="form-control flex-row">
          <label className="label cursor-pointer">
            <input
              value={true}
              type="radio"
              name="victim"
              className="radio-error radio me-2 border-main-red-dark"
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="label cursor-pointer">
            <input
              value={false}
              type="radio"
              name="victim"
              className="radio-error radio me-2 border-main-red-dark"
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default IncidentGeneralInfo;
