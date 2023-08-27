const RenderIncidentType = () => {
  const incidentTypes = [
    'SCUBA diving',
    'Breath-Hold / Freediving / Snorkeling',
    'Technical diving',
    'Military diving',
    'Pre-dive incident',
    'Operational or management incident',
    'Equipment related',
    'Health-related',
    'Rebreather diving',
    'Surface supply',
    'Commercial diving',
    'Civil diving',
    'Non-diving activity',
    'Boating incident/accident',
    'Recompression chamber incident',
    'Medical treatment related',
    'Other',
  ];

  const arr = incidentTypes.map((type) => {
    return (
      <div key={type}>
        <div className="flex">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox border-main-red-dark checkbox-error" />
            <span className="label-text ms-2">{type}</span>
          </label>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col">{arr}</div>;
};

export default RenderIncidentType;
