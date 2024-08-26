import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: Array<number>;
  data_2: Array<number>;
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: Array<string>;
}

export default function BarChart({
  bgColor_1 = "",
  bgColor_2 = "",
  data_1 = [],
  data_2 = [],
  title_1 = "",
  title_2 = "",
  horizontal = false,
  labels = months,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barPercentage: 1,
        categoryPercentage: 0.5,
        barThickness: "flex",
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barPercentage: 1,
        categoryPercentage: 0.5,
        barThickness: "flex",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
