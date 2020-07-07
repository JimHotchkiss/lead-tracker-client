import React, { useEffect } from "react";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import { connect } from "react-redux";

const UserProfile = (props) => {
  useEffect(() => {
    if (props.currentUser === null) {
      getCurrentUser();
    }
  }, []);
  return <div className='user-profile-component'>User Profile</div>;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(UserProfile);
