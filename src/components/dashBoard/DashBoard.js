import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getCurrentUser().catch((error) => {
      alert("Loading failure" + error);
    });
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <p>fuck</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
