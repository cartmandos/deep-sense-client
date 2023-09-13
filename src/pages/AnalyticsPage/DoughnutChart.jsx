import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ dataCharts }) => {
  const { data, label } = dataCharts;
  ChartJS.register(ArcElement, Tooltip);

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
  const textCenter = {
    id: 'textCenter',

    beforeDatasetDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bolder 16px Arial';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      ctx.fillText(
        label.charAt(0).toUpperCase().concat(label.slice(1).toString()),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      );
    },
  };

  return (
    <div>
      <div className="h-96 w-96">
        <Doughnut data={chartData} plugins={[textCenter]} />
      </div>
    </div>
  );
};

export default DoughnutChart;
