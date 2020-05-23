import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import Leads from "../leads/Leads";
class DashBoard extends Component {
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser === null) {
      this.props.getCurrentUser().catch((error) => {
        alert("Loading failure" + error);
      });
    }
  }

  render() {
    const leads = this.props.leads;
    return (
      <div style={{ height: "500px" }}>
        <Leads
          leads={leads}
          camera='12'
          monitor='4'
          digital_capture='10'
          insufflator='6'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    leads: state.leads.map((lead) => {
      return {
        ...lead,
        contact: state.contacts.find((a) => a.id === lead.contact_id),
      };
    }),

    user: state.user,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
