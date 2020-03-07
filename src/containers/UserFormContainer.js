import React, { Component } from "react";

class UserFormContainer extends Component {
  constructor(props) {
    super(props);
    // state - will connect Redux soon
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  usernameChangeHandler = event => {
    console.log("in usernameChangeHandler");
  };

  render() {
    return <div className="FormContainer">User Form Container</div>;
  }
}

export default UserFormContainer;
