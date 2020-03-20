import React, { Component } from "react";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";

class RepDashboardContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="dashboard-container">
        {/* Main div */}
        <div className="dashboard-top-div">
          <div className="sub-div-left">
            <div className="pie-chart-div">
              <LeadsChart />
            </div>
            {/* <div className="pie-chart-text">text component will go here</div> */}
          </div>
          <div className="sub-div-right">
            <div className="right-top-chart">
              <StatusChart />
            </div>
            <div className="right-bottom-chart"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepDashboardContainer;
