import React from "react";
import { Component } from "react";
import "./chart.css";
import { HorizontalBar, Bar, Line } from "react-chartjs-2";

class StatusChart extends Component {
  render() {
    const data = {
      labels: ["New", "Open", "Pending", "Closed"],
      datasets: [
        {
          label: "Leads By Status",
          data: [8, 12, 3, 6],
          backgroundColor: ["#3cb4dc", "#c5dce4", "#145970", "#8bcbe4"]
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
