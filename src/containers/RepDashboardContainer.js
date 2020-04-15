import React, { Component } from "react";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";
import LeadsTable from "../components/LeadsTable";
import { connect } from "react-redux";
const API_URL = process.env.REACT_APP_API_URL;
class RepDashboardContainer extends Component {
  componentDidMount() {
    console.log("inside componentDidMount");
    return (dispatch) => {
      return fetch(`${API_URL}/leads`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((leads) => {
          console.log(leads);
          // if (user.error) {
          //   alert(user.error);
          // } else {
          //   dispatch({ type: "SET_CURRENT_USER", user });
          // }
        });
    };
  }
  render() {
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(RepDashboardContainer);
