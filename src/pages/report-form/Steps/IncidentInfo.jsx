const IncidentInfo = () => {
  return (
    <div>
      <div className="form-control">
        <span className=" mx-3 uppercase">Dive description</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
        <span className=" mx-3 uppercase">incident description</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
        <span className=" mx-3 uppercase">outcome</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
        <span className=" mx-3 uppercase">emergency response</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
        <span className=" mx-3 uppercase">contribute factors</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
        <span className=" mx-3 uppercase">lessons learned</span>
        <textarea className="textarea textarea-lg  mx-3 mb-4 border-main-red-dark"></textarea>
      </div>
    </div>
  );
};

export default IncidentInfo;
