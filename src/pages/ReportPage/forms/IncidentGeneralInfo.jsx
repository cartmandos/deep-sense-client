import { INCIDENT_TYPE } from '@lib/data/checkboxData';
import { useForm } from '../hooks/useForm';

const IncidentGeneralInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div className="m-4">
      {/* location - country */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Incident Location</h4>
          <span className="label-text capitalize">country</span>
        </div>

        <input
          type="text"
          name="locationCountry"
          value={formData.locationCountry}
          placeholder="Type here"
          className="input input-bordered input-ghost input-lg  mb-4 w-1/3 max-w-xs border-0 border-b-2 border-gray-400
         hover:border-main-red-dark focus:border-main-red-dark focus:bg-main-gray-light focus:outline-none active:bg-main-gray-light"
          onChange={handleChange}
        />
      </div>

      {/* location - dive site */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Incident Location</h4>
          <span className="label-text capitalize">dive site</span>
        </div>
        <input
          type="text"
          name="locationDiveSite"
          value={formData.locationDiveSite}
          placeholder="Type here"
          className="input input-bordered input-ghost input-lg  mb-4 w-1/3 max-w-xs border-0 border-b-2 border-gray-400
         hover:border-main-red-dark focus:border-main-red-dark focus:bg-main-gray-light focus:outline-none active:bg-main-gray-light"
          onChange={handleChange}
        />
      </div>
      {/* date */}
      <div className="mb-5 flex items-center justify-between">
        <h4 className="label-text uppercase">Incident Date</h4>
        <input
          type="date"
          name="date"
          value={formData.date}
          className="input input-bordered input-ghost input-lg  mb-4 w-1/3 max-w-xs border-0 border-b-2 border-gray-400
         hover:border-main-red-dark focus:border-main-red-dark focus:bg-main-gray-light focus:outline-none active:bg-main-gray-light"
          onChange={handleChange}
        />
      </div>

      {/* Incident Type */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Incident Type</h4>
          <span className="label-text">What type of incident would you like to report?</span>
        </div>
        <select
          name="type"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2 border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light focus:outline-none active:bg-main-gray-light"
        >
          {INCIDENT_TYPE.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
              //         onChange={handleChange}
              //         checked={formData.discipline === discipline ? true : false}
            );
          })}
        </select>
      </div>

      {/* involvment */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">Incident Involvement</h4>
        </div>
        <select
          name="victim"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
          onChange={handleChange}
        >
          <option value="involved">involved</option>
          <option value="not involved">not involved</option>
        </select>
      </div>

      {/* victim */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="label-text uppercase">victim</h4>
        </div>
        <select
          name="victim"
          className="select select-ghost select-lg  w-1/3  border-0  border-b-2  border-gray-400 capitalize hover:select-bordered hover:border-main-red-dark focus:bg-main-gray-light active:bg-main-gray-light"
          onChange={handleChange}
        >
          <option value="victim">victim</option>
          <option value="not victim">not victim</option>
        </select>
      </div>
    </div>
  );
};

export default IncidentGeneralInfo;
