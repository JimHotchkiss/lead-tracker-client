import React, { Component } from "react";
import UserFormContainer from "./UserFormContainer";
import "./formContainer.css";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";
import LeadsTable from "../components/LeadsTable";
import { connect } from "react-redux";
class RepDashboardContainer extends Component {
  render() {
    const renderDashboard = () => {
      console.log(this.props.currentUser.data.attributes.leads[0]);
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
