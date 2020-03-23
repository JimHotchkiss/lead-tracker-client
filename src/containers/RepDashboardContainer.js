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
    let leads;
    let userLeads;
    const currentUserLeads = () => {
      if (this.props.leads) {
        leads = this.props.leads.data.filter(lead => lead.attributes.user);
      }
      filterLeads(leads);
    };

    const filterLeads = leads => {
      if (leads) {
        userLeads = leads.filter(
          lead => lead.id === this.props.currentUser.id.toString()
        );
      }
    };
    const renderDashboard = () => {
      return (
        <div className="dashboard-top-div">
          <div className="sub-div-left">
            <div className="pie-chart-div">
              {currentUserLeads()}
              <LeadsChart />
            </div>
          </div>
          <div className="sub-div-right">
            <div className="right-top-chart">
              <StatusChart />
            </div>
            <div className="right-bottom-chart">
              <LeadsTable leads={userLeads} />
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="dashboard-container">
        {this.props.currentUser ? renderDashboard() : null}
        {/* {this.props.leads ? console.log(currentUserLeads()) : null} */}
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
