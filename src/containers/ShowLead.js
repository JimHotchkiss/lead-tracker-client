import React from "react";
import { connect } from "react-redux";
import "./leadsManager.css";

const ShowLead = () => {
  // console.log(currentUser);
  return <div className='show-lead-div'>Show Lead</div>;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(ShowLead);
