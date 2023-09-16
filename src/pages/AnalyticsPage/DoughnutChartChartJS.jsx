import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ dataCharts }) => {
  const { data, label } = dataCharts;
  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    // labels: data.map((item) => `${label}s: ${item.title}`),
    labels: data.map((item) => `${item.title}`),
    datasets: [
      {
        data: data.map((item) => item.count),
        label: 'Cases',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 2,
    title: {
      display: true,
      text: `${label}s`,
    },
    plugins: {
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle',
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        // fullSize: false,
        // maxWidth: 5,
      },
    },
  };
  //

  return (
    <div className="h-full w-1/3">
      <Doughnut data={chartData} options={options} className="h-full" />
    </div>
  );
};

export default DoughnutChart;

//const textCenter = {
//   id: 'textCenter',

//   beforeDatasetDraw(chart) {
//     const { ctx } = chart;
//     ctx.save();
//     ctx.font = 'bolder 16px Arial';
//     ctx.fillStyle = 'red';
//     ctx.textAlign = 'center';
//     ctx.fillText(
//       label.charAt(0).toUpperCase().concat(label.slice(1).toString()),
//       chart.getDatasetMeta(0).data[0].x,
//       chart.getDatasetMeta(0).data[0].y,
//     );
//   },
// };
