const IncidentInfo = () => {
  return (
    <div>
      <div className="form-control">
        <span className=" mx-3 uppercase">Dive description</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
        <span className=" mx-3 uppercase">incident description</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
        <span className=" mx-3 uppercase">outcome</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
        <span className=" mx-3 uppercase">emergency response</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
        <span className=" mx-3 uppercase">contribute factors</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
        <span className=" mx-3 uppercase">lessons learned</span>
        <textarea className="textarea textarea-lg  border-main-red-dark mx-3 mb-4"></textarea>
      </div>
    </div>
  );
};

export default IncidentInfo;
