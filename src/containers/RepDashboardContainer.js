import React, { Component } from "react";
import LeadsChart from "../components/LeadsChart";
import StatusChart from "../components/StatusChart";
import "./dashboard.css";
import LeadsTable from "../components/LeadsTable";
import { connect } from "react-redux";

class RepDashboardContainer extends Component {
  render() {
    const dataArray = [];
    let data;
    let leadsData;
    const leadsArray = [];
    let leads;
    let userLeads;
    const leadsDataFunction = () => {
      if (this.props.leads) {
        data = this.props.leads.data.filter(lead => lead.attributes.user);
      }
      if (data) {
        leadsData = data.filter(
          item => item.id === this.props.currentUser.id.toString()
        );
      }
      if (leadsData) {
        leadsData.map(object => {
          Object.values(object.attributes).forEach(value => {
            if (typeof value === "string") {
              dataArray.push(value);
            }
          });
        });
      }
      return dataArray;
    };
    const currentUserLeads = () => {
      if (this.props.leads) {
        leads = this.props.leads.data.filter(lead => lead.attributes.user);
      }
      if (leads) {
        userLeads = leads.filter(
          lead => lead.id === this.props.currentUser.id.toString()
        );
      }
      if (userLeads) {
        userLeads.map(object => {
          Object.keys(object.attributes).forEach((key, value) => {
            leadsArray.push(key);
          });
        });
      }
      return leadsArray;
    };

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
              <LeadsTable
                data={leadsDataFunction()}
                leads={currentUserLeads()}
              />
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
