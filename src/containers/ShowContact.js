import React from "react";
import { connect } from "react-redux";
import "./leadsManager.css";
// console.log("show contact:", this.props.currentUser);
const ShowContact = () => {
  return <div className='show-lead-div'>Show Contact</div>;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(ShowContact);
