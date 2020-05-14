import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const DashBoard = (props) => {
  useEffect(() => {
    props.getCurrentUser();
  }, []);

  console.log(props.currentUser);
  return (
    <div>
      <p>You'll need to login to see this page</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser, user: state.user };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
