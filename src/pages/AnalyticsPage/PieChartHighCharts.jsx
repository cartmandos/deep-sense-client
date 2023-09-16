import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChartHighCharts = ({ dataCharts }) => {
  const { data, label } = dataCharts;
  const chartData = data.map((item) => {
    return { name: item.title, y: item.count };
  });
  const options = {
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      itemWidth: 120,
      itemStyle: {
        fontSize: '0.75rem',
      },
      x: 0,
      y: 30,
    },
    chart: {
      type: 'pie',
    },
// NOTE: add onClick function that will open a modal with the data of the clicked chart(not best choice in my opinion but an option)
    title: {
      text: label.charAt(0).toUpperCase().concat(label.slice(1).toString()),
      align: 'center',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        data: chartData,
        name: 'Count',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChartHighCharts;
