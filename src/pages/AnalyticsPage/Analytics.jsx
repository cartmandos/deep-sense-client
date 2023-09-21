import { useEffect, useState } from 'react';

import Carousel from './Carousel';
import Charts from './Charts';
import DataTableView from './DataTableView';

import mockData from './mockData.json';

const filterCategories = {
  Incidents: ['type', 'severity', 'discipline'],
  Experience: ['certification', 'frequency', 'years'],
  Demographics: ['age', 'gender', 'country'],
};

const criteriaOptions = ['Incidents', 'Experience', 'Demographics'];

const AnalyticsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [criteria, setCriteria] = useState(criteriaOptions[0]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      const loadedData = filterCategories[criteria].reduce((acc, filter) => {
        return { ...acc, [filter]: mockData[filter] };
      }, {});

      setData(loadedData);
      setIsLoading(false);
    };

    fetchData();
  }, [criteria]);

  const handleNext = () => {
    const currentIndex = criteriaOptions.indexOf(criteria);
    const nextIndex = (currentIndex + 1) % criteriaOptions.length;
    setCriteria(criteriaOptions[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = criteriaOptions.indexOf(criteria);
    const prevIndex = (currentIndex - 1 + criteriaOptions.length) % criteriaOptions.length;
    setCriteria(criteriaOptions[prevIndex]);
  };

  return (
    !isLoading && (
      <div className="flex">
        <div className="flex w-full flex-col justify-center">
          {/* <h1 className="mb-3 text-center text-2xl uppercase">header</h1> */}
          <Carousel criteria={criteria} onNext={handleNext} onPrev={handlePrev} />
          <Charts view={criteria} filters={filterCategories[criteria]} data={data} />
          <DataTableView filters={filterCategories[criteria]} data={data} />
        </div>
        {/* <div className="flex w-2/5 bg-gray-800 bg-opacity-70">MAP</div> */}
      </div>
    )
  );
};

export default AnalyticsPage;
