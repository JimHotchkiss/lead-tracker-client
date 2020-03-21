import React from "react";
import { Component } from "react";
import "./chart.css";
import { Pie, Doughnut } from "react-chartjs-2";

class LeadsChart extends Component {
  render() {
    const data = {
      labels: ["Camera", "Monitor", "Digital Capture", "Insufflator"],
      datasets: [
        {
          label: "Leads By Categories",
          data: [8, 12, 3, 6],
          backgroundColor: ["#BBE3DB", "#72969E", "#40689B", "#5A757F"]
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
            text: "Leads By Product",
            fontSize: 25
          }
        }}
      />
    );
  }
}

export default LeadsChart;
