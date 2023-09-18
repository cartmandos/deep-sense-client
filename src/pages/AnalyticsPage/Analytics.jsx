import { useState } from 'react';

import Carousel from './Carousel';
import Charts from './Charts';
import DataTableView from './DataTableView';

import { DUMMY_ANALYTICS_DATA } from '@lib/data/dummyAnalyticsData';

const filters = {
  Incidents: {
    data1: { label: 'type', data: DUMMY_ANALYTICS_DATA.age },
    data2: { label: 'severity', data: DUMMY_ANALYTICS_DATA.diveFrequency },
    data3: { label: 'category', data: DUMMY_ANALYTICS_DATA.diveCertification },
  },
  Experience: {
    data1: { label: 'certification', data: DUMMY_ANALYTICS_DATA.incidentType },
    data2: { label: 'frequency', data: DUMMY_ANALYTICS_DATA.gender },
    data3: { label: 'years', data: DUMMY_ANALYTICS_DATA.diveCertification },
  },
  Demographics: {
    data1: { label: 'age', data: DUMMY_ANALYTICS_DATA.age },
    data2: { label: 'gender', data: DUMMY_ANALYTICS_DATA.divingDiscipline },
    data3: { label: 'country', data: DUMMY_ANALYTICS_DATA.incidentType },
  },
};

const AnalyticsPage = () => {
  const criteria = ['Incidents', 'Experience', 'Demographics'];
  const [view, setView] = useState(criteria[0]);

  return (
    <div className="flex flex-col">
      <div className="flex w-3/5 flex-col justify-center">
        {/* <h1 className="mb-3 text-center text-2xl uppercase">Analytics</h1> */}
        <Carousel criteria={criteria} view={view} setView={setView} />
        <Charts view={view} filters={filters[view]} />
        <DataTableView filters={filters[view]} />
      </div>
      {/* <div className="flex bg-gray-800 bg-opacity-70">bla</div> */}
    </div>
  );
};

export default AnalyticsPage;
