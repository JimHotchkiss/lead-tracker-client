import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const DashBoard = (props) => {
  // useEffect is causing an infinit loop
  // useEffect(() => {
  //   props.getCurrentUser();
  // });
  return (
    <div>
      <p>You'll need to login to see this page</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
