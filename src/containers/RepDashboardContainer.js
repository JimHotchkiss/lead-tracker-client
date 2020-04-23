import React, { Component } from "react";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";
import LeadsTable from "../components/LeadsTable";
import { connect } from "react-redux";
const API_URL = process.env.REACT_APP_API_URL;
class RepDashboardContainer extends Component {
  // componentDidMount() {
  // console.log("log");
  // fetch(`${API_URL}/leads`)
  //   .then((response) => response.json())
  //   .then((leads) => console.log(leads));
  // return (dispatch) => {
  //   console.log("inside");
  //   return fetch(`${API_URL}/leads`)
  //     .then((response) => response.json())
  //     .then((leads) => {
  //       console.log(leads);
  //       if (leads.error) {
  //         alert(leads.error);
  //       } else {
  //         dispatch({ type: "SET_LEADS", leads });
  //       }
  //     });
  // };
  // }
  render() {
    const renderDashboard = () => {
      return (
        <div className='dashboard-top-div'>
          <div className='sub-div-left'>
            <div className='pie-chart-div'>
              <LeadsChart />
            </div>
          </div>
          <div className='sub-div-right'>
            <div className='right-top-chart'>
              <StatusChart />
            </div>
            <div className='right-bottom-chart'>
              <LeadsTable />
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className='dashboard-container'>
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
