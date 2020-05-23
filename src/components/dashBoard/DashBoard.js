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
    if (this.props.currentUser !== null) {
      this.props.attributes.map((item) => {
        if (item.type === "lead") {
          if (item.attributes.product === "Camera") {
            alert("sup, yo!?");
          }
        }
      });
    }

    console.log(this.state);

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
