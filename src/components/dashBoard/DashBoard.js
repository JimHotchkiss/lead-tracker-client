import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import PieChart from "../piechart/PieChart";
class DashBoard extends Component {
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser.length === 0) {
      this.props.getCurrentUser().catch((error) => {
        alert("Loading failure" + error);
      });
    }
  }
  render() {
    console.log(this.props.currentUser);

    return (
      <div style={{ height: "500px" }}>
        <PieChart
          camera='12'
          monitor='4'
          digital_capture='10'
          insufflator='6'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    user: state.user,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
