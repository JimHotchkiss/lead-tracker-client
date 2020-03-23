import React from "react";
import { Component } from "react";
import "./chart.css";
import { Pie, Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class LeadsChart extends Component {
  render() {
    const data = {
      labels: ["Camera", "Monitor", "Digital Capture", "Insufflator"],
      datasets: [
        {
          label: "Leads By Categories",
          data: [8, 12, 3, 6],
          backgroundColor: ["#1b83dc", "#4e9ee4", "#9ac8ef", "#cce3f7"]
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
            text: `Leads By Product`,
            fontSize: 25
          }
        }}
      />
    );
  }
}

const stateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(stateToProps)(LeadsChart);
