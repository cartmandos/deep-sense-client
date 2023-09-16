import PieChartHighCharts from './PieChartHighCharts';

const Charts = ({ view, dataCharts }) => {
  // NOTE: the number of the rendered charts by default is 3 and can be changed by the user
  // therefor the data will be passed separate from the view
  // NOTE: the views {carousel data} will be passed from the parent component
  // in addition to the current status (12.9) it will include default charts and extra
  // charts which will fit the amount of charts the user chose to render

  return (
    // NOTE: charts using highcharts
    <div className=" grid h-full w-full grid-cols-3 grid-rows-3">
      <div className="col-span-3 row-span-2 flex ">
        <PieChartHighCharts dataCharts={dataCharts.data1} className="w-1/3" />
        <PieChartHighCharts dataCharts={dataCharts.data2} className="w-1/3" />
        <PieChartHighCharts dataCharts={dataCharts.data3} className="w-1/3" />
      </div>
      <div className="col-span-3 row-span-1 mb-10 bg-amber-300">dasds</div>
    </div>
    // NOTE: charts using chartjs
    // <div className="m-3 grid h-full w-full grid-cols-3 grid-rows-3 gap-2">
    //   <div className="col-span-3 row-span-3 flex justify-items-center  p-3">
    //     <DoughnutChart dataCharts={dataCharts.data1} />
    //     <DoughnutChart dataCharts={dataCharts.data2} />
    //     <DoughnutChart dataCharts={dataCharts.data3} />
    //   </div>
    //   <div className="col-span-3 row-span-1 bg-red-700"></div>
    // </div>
  );
};

export default Charts;
