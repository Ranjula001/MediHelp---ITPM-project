import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { LinearScale, CategoryScale, PointElement, LineController, Tooltip } from "chart.js";

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Register the required scales
    Chart.register(LinearScale, CategoryScale, PointElement, LineController, Tooltip);

    // Create your chart here using the 'Chart' object
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Health Projects",
            data: [10, 20, 20, 20, 50, 45],
            borderColor: "red",
            fill: false,
          },
          {
            label: "Health Events",
            data: [5, 10, 20, 30, 45, 45],
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Donations",
            data: [20, 23, 18, 35, 48, 55],
            borderColor: "green",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Count",
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          title: {
            display: true,
            text: "Multiple Lines Chart",
          },
        },
      },
    });

    return () => {
      // Cleanup code
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Graph;
