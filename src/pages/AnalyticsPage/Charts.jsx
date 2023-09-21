import PieChartHighCharts from './PieChartHighCharts';

//REVIEW: Add limit?
const Charts = ({ filters, data }) => {
  return (
    <div className="grid h-full w-full grid-cols-3">
      {Object.keys(data).length &&
        filters.map((filter) => (
          <PieChartHighCharts key={filter} label={filter} data={data[filter]} />
        ))}
    </div>
  );
};

export default Charts;
