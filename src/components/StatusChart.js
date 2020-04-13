import React from "react";
import { Component } from "react";
import "./chart.css";
import { HorizontalBar } from "react-chartjs-2";

class StatusChart extends Component {
  render() {
    const data = {
      labels: ["New", "Open", "Pending", "Closed"],
      datasets: [
        {
          label: "Leads By Status",
          data: [8, 12, 3, 6],
          backgroundColor: ["#1b83dc", "#4e9ee4", "#9ac8ef", "#cce3f7"]
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
                  suggestedMin: 0,
                  suggestedMax: 15
                }
              }
            ]
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Status Of Leads",
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