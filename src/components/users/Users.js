import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const Users = (props) => {
  return (
    <div>
      <p>Users Page </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps)(Users);
