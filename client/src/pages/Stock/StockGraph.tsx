import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale
);

const StockGraph = ({ data }: { data: number[] }) => {
  const chartRef = useRef<any>(null); 

  const chartData = {
    labels: Array(data.length).fill(''), 
    datasets: [
      {
        label: 'Stock Price',
        data,
        borderColor: '#0a73ff',
        backgroundColor: '#0a73ff',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis labels
      },
      y: {
        display: false, // Hide Y-axis labels
      },
    },
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); 
      }
    };
  }, []);

  return (
    <div style={{ height: '300px' }}>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default StockGraph;
