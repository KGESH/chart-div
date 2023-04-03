import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState } from 'react';
import type { ChartOptions } from 'chart.js';

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {},
    y: {
      min: 0,
      max: 10,
    },
  },
};

export default function CommonChart() {
  const [data, setData] = useState({
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  });
  return <Line datasetIdKey="first" options={options} data={data}></Line>;
}
