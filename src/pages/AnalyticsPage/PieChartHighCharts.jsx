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
      itemWidth: 100,
      fontSize: '8px',
      x: 0,
      y: 30,
      // title: {
      //   fontSize: '4px',
      // },
    },
    chart: {
      type: 'pie',
    },

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
        showInLegend: true,
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
