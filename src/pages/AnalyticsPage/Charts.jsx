import { useEffect } from 'react';

const Charts = ({ view }) => {
  // NOTE: the number of the rendered charts by default is 3 and can be changed by the user
  // therefor the data will be passed separate from the view
  // NOTE: the views {carousel data} will be passed from the parent component
  // in addition to the current status (12.9) it will include default charts and extra
  // charts which will fit the amount of charts the user chose to render

  useEffect(() => {
    switch (view) {
      case 'main':
        return console.log('main');
    }
  }, [view]);

  return <div>
    
  </div>;
};

export default Charts;
