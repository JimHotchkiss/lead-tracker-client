import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userAsyncActions";
import PieChart from "../piechart/PieChart";
class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      cameras: 0,
      digital_captures: 0,
      insufflators: 0,
      monitors: 0,
    };
  }
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser === null) {
      this.props.getCurrentUser().catch((error) => {
        alert("Loading failure" + error);
      });
    }
  }

  render() {
    console.log(this.props.leads);

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
  console.log(state.attributes);
  return {
    currentUser: state.currentUser,
    // leads: state.currentUser.leads,
    user: state.user,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(DashBoard);
