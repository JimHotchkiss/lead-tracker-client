import React, { Component } from "react";
import LeadChart from "../components/LeadChart";
import "./dashboard.css";

class RepDashboardContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-top-div">
          <LeadChart />
        </div>
      </div>
    );
  }
}

export default RepDashboardContainer;
