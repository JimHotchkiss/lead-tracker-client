import React, { Component } from "react";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";
import LeadsTable from "../components/LeadsTable";
import { connect } from "react-redux";

class RepDashboardContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props.currentUser);
    console.log(this.props.leads);
    const renderDashboard = () => {
      return (
        <div className="dashboard-top-div">
          <div className="sub-div-left">
            <div className="pie-chart-div">
              <LeadsChart />
            </div>
          </div>
          <div className="sub-div-right">
            <div className="right-top-chart">
              <StatusChart />
            </div>
            <div className="right-bottom-chart">
              <LeadsTable />
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="dashboard-container">
        {this.props.currentUser ? renderDashboard() : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    leads: state.leads
  };
};

export default connect(mapStateToProps)(RepDashboardContainer);
