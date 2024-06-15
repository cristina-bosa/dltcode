import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { fontString } from 'chart.js/helpers';
import { text } from 'stream/consumers';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'Acceso no autorizado',
    'Fraude',
    'Virus y spyware',
    'Spam',
    'Otros',
    'Denegación de servicio',
    'Escaneos de red',
    'Robo de información'],
  datasets: [
    {
      data: [
        37.94,
        23.90,
        9.76,
        5.62,
        15.54,
        4.41,
        2.38,
        0.45],
      backgroundColor: [
        '#0D1B2A',
        '#13283E',
        '#1D3C5E',
        '#26507D',
        '#3A78BB',
        '#538DCA',
        '#82ACD9',
      ],
    },
  ],
};
export const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip:{
      displayColors: false,
      titleFont: {size: 16, weight: 'bold'},
      callbacks: {
        label: function(context) {
          return context.parsed + '%';
        },
      },
    }
  },

  responsive: true,
}
const Chart = () => {
  return <Doughnut data={data} options={options} />;
}

export default Chart;