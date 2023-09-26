import { useForm } from '../hooks/useForm';

const IncidentInfo = () => {
  const { formData, handleChange } = useForm();

  return (
    <div>
      <div className="form-control">
        <span className=" mx-3 uppercase">Dive description</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered    hover:border-main-red-dark  focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.diveDescription}
          name={'diveDescription'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">incident description</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered    hover:border-main-red-dark  focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.incidentDescription}
          name={'incidentDescription'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">outcome</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered    hover:border-main-red-dark  focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.outcome}
          name={'outcome'}
          onChange={handleChange}
        />

        <span className=" mx-3 uppercase">emergency response</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered    hover:border-main-red-dark  focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.emergencyResponse}
          name={'emergencyResponse'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">contribute factors</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered   hover:border-main-red-dark focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.contributeFactors}
          name={'contributeFactors'}
          onChange={handleChange}
        />
        <span className=" mx-3 uppercase">lessons learned</span>
        <textarea
          className="textarea textarea-ghost textarea-lg mx-3 mb-4 h-20  resize-none overflow-hidden
           border-0 border-b-2 border-gray-400   hover:select-bordered    hover:border-main-red-dark  focus:border-main-red-dark
           focus:bg-main-gray-light active:bg-main-gray-light"
          value={formData.lessonsLearned}
          name={'lessonsLearned'}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default IncidentInfo;
