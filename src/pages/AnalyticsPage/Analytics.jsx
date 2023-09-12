import { useState } from 'react';

import Carousel from './Carousel';
import Charts from './Charts';

import { DUMMY_ANALYTICS_DATA } from '@lib/data/dummyAnalyticsData';

const AnalyticsPage = () => {
  const [view, setView] = useState('main');

  console.log(DUMMY_ANALYTICS_DATA);
  return (
    <div className="h-full">
      <h1 className="mb-3 text-center text-2xl uppercase"> dive sense - report Analytics</h1>
      <Carousel view={view} setView={setView} />
      <Charts view={view} />
    </div>
  );
};

export default AnalyticsPage;
