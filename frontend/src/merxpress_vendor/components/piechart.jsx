import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
// ... (your existing code)

const PieChart = () => {
  // Dummy data for the pie chart
  const data = {
    labels: ['Cancellation rate ', 'Quality Return rate ', 'Average Customer rate'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Options for the pie chart
  const options = {
    legend: {
      display: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed.toFixed(2)}%`;
          },
        },
      },
    },
  };
  

  // Calculate percentages and create labels
  const percentages = data.datasets[0].data.map(
    (value) => ((value / data.datasets[0].data.reduce((acc, val) => acc + val, 0)) * 100).toFixed(2)
  );

  return (
   
      <div className="flex items-center justify-between pb-5 sm:space-x-16 md:space-x-0 lg:space-x-24">
        {/* Left side: Pie chart */}
        <div className=" w-24 sm:w-36 md:w-40 md:ml-20" >
          <Pie data={data} options={options} />
        </div>

        {/* Right side: Labels with percentages and color dots */}
        <div className="flex-1 flex flex-col items-center text-xs md:text-xl  p-4  lg:p-7 lg:ml-4" >
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></div>
              <span className='mr-2'>{label}:</span>
              <span>{`${percentages[index]}%`}</span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PieChart;
