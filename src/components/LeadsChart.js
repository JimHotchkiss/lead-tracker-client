import React from "react";
import { Component } from "react";
import "./chart.css";
import { Doughnut, Line, Pie, Bar } from "react-chartjs-2";

class LeadsChart extends Component {
  render() {
    const data = {
      labels: ["Camera", "Monitor", "Digital Capture", "Insufflator"],
      datasets: [
        {
          label: "Leads By Categories",
          data: [8, 12, 3, 6],
          backgroundColor: ["#3cb4dc", "#c5dce4", "#145970", "#8bcbe4"]
        }
      ]
    };
    return (
      <Pie
        data={data}
        width={30}
        height={15}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Leads By Categories",
            fontSize: 25
          }
          // legend: {
          //   display: true,
          //   position: "center"
          // }
        }}
      />
    );
  }
}

export default LeadsChart;
