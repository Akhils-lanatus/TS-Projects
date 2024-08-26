import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  labels: Array<string>;
  data: Array<number>;
  backgroundColor: Array<string>;
  cutout?: number | string;
  legends?: boolean;
  offset?: Array<number>;
}

const tempLebel = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

export function DoughnutChart({
  labels = tempLebel,
  backgroundColor,
  data,
  offset,
  cutout,
  legends = true,
}: DoughnutChartProps) {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [{ data, backgroundColor, offset, borderWidth: 0 }],
  };

  const doughnutOption: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOption} />;
}
