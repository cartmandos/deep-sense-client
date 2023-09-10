import { useForm } from '../hooks/useForm';

const IncidentInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div>
      <div className="form-control">
        <span className=" mx-3 uppercase">Dive description</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.diveDescription}
          name={'diveDescription'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">incident description</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.incidentDescription}
          name={'incidentDescription'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">outcome</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.outcome}
          name={'outcome'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">emergency response</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.emergencyResponse}
          name={'emergencyResponse'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">contribute factors</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.contributeFactors}
          name={'contributeFactors'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">lessons learned</span>
        <textarea
          className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"
          value={formData.lessonsLearned}
          name={'lessonsLearned'}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default IncidentInfo;
