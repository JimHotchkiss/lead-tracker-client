import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import Products from "../../components/products/Products";
import "./dashBoard.css";
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
    const { leads } = this.props;
    const { cameras } = this.props;
    const { monitors } = this.props;
    const { digital_captures } = this.props;
    const { insufflators } = this.props;
    return (
      <div className='products-component-div'>
        <Products
          leads={leads}
          cameras={cameras}
          monitors={monitors}
          digital_captures={digital_captures}
          insufflators={insufflators}
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
    cameras: state.leads.filter((lead) => lead.product === "Camera"),
    monitors: state.leads.filter((lead) => lead.product === "Monitor"),
    digital_captures: state.leads.filter(
      (lead) => lead.product === "Digital Capture"
    ),
    insufflators: state.leads.filter((lead) => lead.product === "Insufflator"),
    user: state.user,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
