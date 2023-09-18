import PieChartHighCharts from './PieChartHighCharts';

const Charts = ({ filters }) => {
  // console.log(filters);
  // NOTE: the number of the rendered charts by default is 3 and can be changed by the user
  // therefor the data will be passed separate from the view
  // NOTE: the views {carousel data} will be passed from the parent component
  // in addition to the current status (12.9) it will include default charts and extra
  // charts which will fit the amount of charts the user chose to render

  const { data1, data2, data3 } = filters;

  return (
    // NOTE: charts using highcharts
    <div className=" grid h-full w-full grid-cols-3  ">
      <PieChartHighCharts filter={data1} />
      <PieChartHighCharts filter={data2} />
      <PieChartHighCharts filter={data3} />
    </div>
  );
};

export default Charts;
