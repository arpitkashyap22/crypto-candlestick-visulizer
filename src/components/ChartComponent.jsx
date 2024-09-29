
import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Candlestick Chart',
        data: data.map((candle) => ({
                    x: candle.t , // Ensure timestamp is in milliseconds
                    o: candle.o,
                    h: candle.h,
                    l: candle.l,
                    c: candle.c,
                  })),
        borderColor: '#000',
        backgroundColor: 'rgba(0,0,0,0.1)',
      }
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
        },
      },

    },
    maintainAspectRatio: false,
  };

  return (
    <div className='size-4/5'>
      <Chart type="candlestick" data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;


// import React from 'react';
// import { Chart } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   CandlestickController,
//   CandlestickElement,
//   Tooltip,
//   Legend
// );

// const ChartComponent = ({ data }) => {
//   // Handle edge cases where no data exists yet
//   if (!data || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   const chartData = {
//     datasets: [
//       {
//         label: 'Candlestick Chart',
//         data: data.map((candle) => ({
//           x: candle.t * 1000, // Ensure timestamp is in milliseconds
//           o: candle.o,
//           h: candle.h,
//           l: candle.l,
//           c: candle.c,
//         })),
//         borderColor: '#000',
//         backgroundColor: 'rgba(0,0,0,0.1)',
//       }
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'time', // Ensure the X-axis is a time scale
//         time: {
//           unit: 'minute', // Adjust according to your granularity
//           displayFormats: {
//             minute: 'MMM d, h:mm a', // Format of the time on the x-axis
//           },
//         },
//         title: {
//           display: true,
//           text: 'Time',
//         },
//         ticks: {
//           autoSkip: true,
//           maxTicksLimit: 50, // Control the maximum number of ticks displayed
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Price (USDT)',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//     maintainAspectRatio: false, // Adjust to make the chart responsive
//   };

//   return (
//     <div style={{ height: '500px' }}>
//       <Chart type="candlestick" data={chartData} options={options} />
//     </div>
//   );
// };

// export default ChartComponent;
