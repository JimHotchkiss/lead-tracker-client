import React from "react";
import { Component } from "react";
import "./chart.css";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";

class LeadsChart extends Component {
  constructor() {
    super();
    this.state = {
      camera: 0,
      monitor: 0,
      digital_capture: 0,
      insufflator: 0,
    };
  }

  componentDidMount() {
    console.log("lead chart CDM", this.props.currentUser);
    this.setData();
  }

  setData = () => {
    console.log("lead charts:", this.props.currentUser);
    this.props.currentUser.included.map((item) => {
      for (const property in item.attributes) {
        if (item.attributes[property] === "Camera") {
          this.setState((state) => {
            return { camera: state.camera + 1 };
          });
        } else if (item.attributes[property] === "Monitor") {
          this.setState((state) => {
            return { monitor: state.monitor + 1 };
          });
        } else if (item.attributes[property] === "Digital Capture") {
          this.setState((state) => {
            return { digital_capture: state.digital_capture + 1 };
          });
        } else if (item.attributes[property] === "Insufflator") {
          this.setState((state) => {
            return { insufflator: state.insufflator + 1 };
          });
        }
      }
    });
  };

  render() {
    const data = {
      labels: ["Camera", "Monitor", "Digital Capture", "Insufflator"],
      datasets: [
        {
          label: "Leads By Categories",
          data: [
            this.state.camera,
            this.state.monitor,
            this.state.digital_capture,
            this.state.insufflator,
          ],
          backgroundColor: ["#1b83dc", "#4e9ee4", "#9ac8ef", "#cce3f7"],
        },
      ],
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
            fontSize: 25,
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

export default connect(stateToProps)(LeadsChart);
