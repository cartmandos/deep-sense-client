import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';

const Charts = ({ view, dataCharts }) => {
  // NOTE: the number of the rendered charts by default is 3 and can be changed by the user
  // therefor the data will be passed separate from the view
  // NOTE: the views {carousel data} will be passed from the parent component
  // in addition to the current status (12.9) it will include default charts and extra
  // charts which will fit the amount of charts the user chose to render

  return (
    <div className="m-3 flex flex-col self-center">
      <h1 className="self-center text-4xl">{view}</h1>
      <div className="flex">
        <DoughnutChart dataCharts={dataCharts.data1} />
        <DoughnutChart dataCharts={dataCharts.data2} />
        <DoughnutChart dataCharts={dataCharts.data3} />
      </div>
    </div>
  );
};

export default Charts;
