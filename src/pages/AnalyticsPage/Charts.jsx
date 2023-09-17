import PieChartHighCharts from './PieChartHighCharts';

const Charts = ({ dataCharts }) => {
  // NOTE: the number of the rendered charts by default is 3 and can be changed by the user
  // therefor the data will be passed separate from the view
  // NOTE: the views {carousel data} will be passed from the parent component
  // in addition to the current status (12.9) it will include default charts and extra
  // charts which will fit the amount of charts the user chose to render

  const { data1, data2, data3 } = dataCharts;

  // NOTE: this function will compose the brief summary of the charts - for demonstration purposes
  // TODO: this function will be removed or refactor in the future
  // TODO: think may be about more function and maybe add select input to choose form different options of summary
  // avg / max / min / most common / least common / median / mode / etc...
  const composeBriefSummary = () => {
    const dataArr = [];
    Object.values(dataCharts).forEach((item) => {
      const maxCountArr = item.data.map((item) => item.count);
      const maxCount = item.data.filter((item) => item.count === Math.max(...maxCountArr))[0];
      dataArr.push({ label: item.label, count: maxCount.count, title: maxCount.title });
    });

    const summaries = dataArr.map((item, i) => (
      <div key={item}>
        <h1 className="inline-block text-slate-200 underline underline-offset-2 hover:cursor-pointer hover:decoration-yellow-400 hover:decoration-2 hover:underline-offset-4">
          There are <strong>{dataArr[i].count}</strong> cases of <strong>{dataArr[i].label}</strong>{' '}
          for/at <strong>{dataArr[i].title}</strong>
        </h1>
      </div>
    ));

    return <div>{summaries}</div>;
  };

  composeBriefSummary();

  return (
    // NOTE: charts using highcharts
    <div className=" grid h-full w-full grid-cols-3  ">
      <PieChartHighCharts dataCharts={data1} />
      <PieChartHighCharts dataCharts={data2} />
      <PieChartHighCharts dataCharts={data3} />
      {/* FIXME: fix styling */}
      <div className="colo col-span-3  m-1 bg-secondary-red-light p-3">{composeBriefSummary()}</div>
    </div>
  );
};

export default Charts;
