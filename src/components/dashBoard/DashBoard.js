import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const DashBoard = (props) => {
  useEffect(() => {
    props.getCurrentUser();
  }, []);

  return (
    <div>
      <p>
        {props.currentUser && props.currentUser.error
          ? "Say, bitch, you need to be logged in motherfucker"
          : "Because you're logged in, I'll show you all your data"}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
