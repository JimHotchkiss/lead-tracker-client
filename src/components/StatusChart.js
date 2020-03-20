import React from "react";
import { Component } from "react";
import "./chart.css";
import { HorizontalBar, Bar } from "react-chartjs-2";

class StatusChart extends Component {
  render() {
    const data = {
      labels: ["New", "Open", "Pending", "Closed"],
      datasets: [
        {
          label: "Leads By Status",
          data: [8, 12, 3, 6],
          backgroundColor: ["#8B9EE4", "#A48BE4", "#E48BCB", "#E48B9E"]
        }
      ]
    };
    return (
      <HorizontalBar
        data={data}
        width={30}
        height={15}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  suggestedMin: 0
                }
              }
            ]
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Leads By Status",
            fontSize: 25
          },
          legend: {
            display: false
          }
        }}
      />
    );
  }
}

export default StatusChart;
