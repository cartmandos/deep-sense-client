import { useEffect, useState } from 'react';

import Carousel from './Carousel';
import Charts from './Charts';

import { DUMMY_ANALYTICS_DATA } from '@lib/data/dummyAnalyticsData';

const viewDataMain = {
  data1: { label: 'age', data: DUMMY_ANALYTICS_DATA.age },
  data2: { label: 'dive discipline', data: DUMMY_ANALYTICS_DATA.divingDiscipline },
  data3: { label: 'incident type', data: DUMMY_ANALYTICS_DATA.incidentType },
};

const AnalyticsPage = () => {
  const [view, setView] = useState('main');
  const [dataCharts, setDataCharts] = useState(viewDataMain);

  useEffect(() => {
    switch (view) {
      case 'main':
        setDataCharts((dataCharts) => ({
          ...dataCharts,
          data1: { label: 'age', data: DUMMY_ANALYTICS_DATA.age },
          data2: { label: 'dive discipline', data: DUMMY_ANALYTICS_DATA.divingDiscipline },
          data3: { label: 'incident type', data: DUMMY_ANALYTICS_DATA.incidentType },
        }));
        return;
      case 'experience':
        setDataCharts((dataCharts) => ({
          ...dataCharts,
          data1: { label: 'age', data: DUMMY_ANALYTICS_DATA.age },
          data2: { label: 'dive frequency', data: DUMMY_ANALYTICS_DATA.diveFrequency },
          data3: { label: 'dive certification', data: DUMMY_ANALYTICS_DATA.diveCertification },
        }));
        return;
      case 'countries': // countries view data need to be changed
        setDataCharts((dataCharts) => ({
          ...dataCharts,
          data1: { label: 'incident type', data: DUMMY_ANALYTICS_DATA.incidentType },
          data2: { label: 'gender', data: DUMMY_ANALYTICS_DATA.gender },
          data3: { label: 'dive certification', data: DUMMY_ANALYTICS_DATA.diveCertification },
        }));
        return;
      case 'injuries': // injuries view data need to be changed
        setDataCharts((dataCharts) => ({
          ...dataCharts,
          data1: { label: 'age', data: DUMMY_ANALYTICS_DATA.age },
          data2: { label: 'dive discipline', data: DUMMY_ANALYTICS_DATA.divingDiscipline },
          data3: { label: 'incident type', data: DUMMY_ANALYTICS_DATA.incidentType },
        }));
        return;
    }
  }, [view]);

  return (
    <div className="flex h-full flex-col">
      <h1 className="mb-3 text-center text-2xl uppercase"> dive sense - report Analytics</h1>
      <Carousel setView={setView} />
      <Charts view={view} dataCharts={dataCharts} />
    </div>
  );
};

export default AnalyticsPage;
