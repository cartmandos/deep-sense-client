import RenderIncidentType from './RenderIncidentType';

const IncidentGeneralInfo = () => {
  return (
    <div>
      {/* location */}
      <span className="label  uppercase">Incident Location</span>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary mb-2 w-full max-w-xs"
      />
      {/* date date picker*/}
      <span className="label uppercase">Incident Date</span>
      <input type="date" className="input input-bordered input-secondary mb-2 w-full max-w-xs" />
      {/* type -checkbox */}
      <div className="form-control">
        <RenderIncidentType />
      </div>
      {/* involvment - radio */}
      <span className="label-text uppercase">Incident Inolvment</span>
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">Yes</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-error border-main-red-dark me-2"
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IncidentGeneralInfo;
