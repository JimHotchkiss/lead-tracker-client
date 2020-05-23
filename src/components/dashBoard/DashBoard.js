import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import PieChart from "../piechart/PieChart";
class DashBoard extends Component {
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser === null) {
      this.props.getCurrentUser().catch((error) => {
        alert("Loading failure" + error);
      });
    }
  }
  render() {
    if (this.props.currentUser !== null) {
      console.log(this.props.currentUser.username, this.props.attributes);
    }

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
    attributes: state.attributes,
    user: state.user,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
