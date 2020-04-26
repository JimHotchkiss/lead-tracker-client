import React from "react";
import { Component } from "react";
import "./chart.css";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";
class StatusChart extends Component {
  constructor() {
    super();
    this.state = {
      new: 0,
      open: 0,
      pending: 0,
      closed: 0,
    };
  }

  componentDidMount() {
    this.setData();
  }

  setData = () => {
    this.props.currentUser.included.map((item) => {
      for (const property in item.attributes) {
        if (item.attributes[property] === "New") {
          this.setState((state) => {
            return { new: state.new + 1 };
          });
        } else if (item.attributes[property] === "Open") {
          this.setState((state) => {
            return { open: state.open + 1 };
          });
        } else if (item.attributes[property] === "Pending") {
          this.setState((state) => {
            return { pending: state.pending + 1 };
          });
        } else if (item.attributes[property] === "Closed") {
          this.setState((state) => {
            return { closed: state.closed + 1 };
          });
        }
      }
    });
  };

  render() {
    // console.log("new:", this.state.new);
    // console.log("open:", this.state.open);
    // console.log("pending:", this.state.pending);
    // console.log("closed:", this.state.closed);
    const obj = this.state;
    const limits = Object.keys(obj).map(function (key) {
      return obj[key];
    });
    const min = Math.min.apply(null, limits);
    const max = Math.max.apply(null, limits);
    const data = {
      labels: ["New", "Open", "Pending", "Closed"],
      datasets: [
        {
          label: "Leads By Status",
          data: [
            this.state.new,
            this.state.open,
            this.state.pending,
            this.state.closed,
          ],
          backgroundColor: ["#1b83dc", "#4e9ee4", "#9ac8ef", "#cce3f7"],
        },
      ],
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
                  suggestedMin: min,
                  suggestedMax: max + 0.5,
                },
              },
            ],
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Status Of Leads",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    );
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(stateToProps)(StatusChart);
