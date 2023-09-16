import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DoughnutHighCharts = () => {
  const options = {
    legend: {
      title: {
        text: 'City<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
        style: {
          fontStyle: 'italic',
        },
      },
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -10,
      y: 100,
    },
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 25,
      },
    },
    title: {
      text: 'test',
      align: 'left',
    },
    plotOptions: {
      pie: {
        innerSize: 100,
      },
    },
    series: [
      {
        name: 'Delivered amount',
        data: [10],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      className="row-span-1 bg-slate-300"
    />
  );
};

export default DoughnutHighCharts;
