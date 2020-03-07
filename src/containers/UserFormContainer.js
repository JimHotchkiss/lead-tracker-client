import React, { Component } from "react";
import "./formContainer.css";
import Input from "../components/Input";
import ButtonComponent from "../components/ButtonComponent";

class UserFormContainer extends Component {
  constructor(props) {
    super(props);
    // state - will connect Redux soon
    this.state = {
      newUser: {
        username: "",
        email: "",
        password: ""
      },
      userAccess: ["Representative", "Administrator"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
  }

  handleFormSubmit(event) {
    console.log("handle form submit");
  }
  handleClearForm(event) {
    console.log("handle form clear");
  }
  usernameChangeHandler(event) {
    console.log("in usernameChangeHandler");
  }
  emailChangeHandler(event) {
    console.log("email change handler");
  }
  passwordChangeHandler(event) {
    console.log("password change handler");
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <Input
          title={"Username"}
          type={"text"}
          name="username"
          value={this.state.newUser.username}
          placeholder={"Enter your username"}
          onChange={this.usernameChangeHandler}
        />{" "}
        {/* Username */}
        <Input
          title={"Email"}
          type={"text"}
          name="email"
          value={this.state.newUser.email}
          placeholder={"Enter your email"}
          onChange={this.emailChangeHandler}
        />{" "}
        {/* Password */}
        <Input
          title={"Password"}
          type={"text"}
          name="email"
          value={this.state.newUser.password}
          placeholder={"Enter your password"}
          onChange={this.passwordChangeHandler}
        />{" "}
        {/* Password */}
        <ButtonComponent />
      </form>
    );
  }
}

export default UserFormContainer;
