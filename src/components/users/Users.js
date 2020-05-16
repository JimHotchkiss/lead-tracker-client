import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const Users = (props) => {
  const userId = props.match.params.id;

  console.log(props.match.params.id);
  useEffect(() => {
    props.getCurrentUser(userId);
  }, []);

  return (
    <div>
      <p>Users Page </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps, { getCurrentUser })(Users);
