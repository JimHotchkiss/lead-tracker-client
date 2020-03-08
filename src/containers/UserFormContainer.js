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
    this.handleFormClear = this.handleFormClear.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
  }

  handleFormSubmit(event) {
    // console.log("handle form submit");
  }
  handleFormClear(event) {
    event.preventDefault();
    this.setState({
      newUser: {
        username: "",
        email: "",
        password: ""
      }
    });
  }
  usernameChangeHandler(event) {
    let value = event.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, username: value }
    }));
  }
  emailChangeHandler(event) {
    let value = event.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, email: value }
    }));
  }
  passwordChangeHandler(event) {
    let value = event.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, password: value }
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <Input
          title={"Username"}
          type={"text"}
          name={"username"}
          value={this.state.newUser.username}
          placeholder={"Enter your username"}
          handleChange={this.usernameChangeHandler}
        />{" "}
        {/* Username */}
        <Input
          title={"Email"}
          type={"text"}
          name={"email"}
          value={this.state.newUser.email}
          placeholder={"Enter your email"}
          handleChange={this.emailChangeHandler}
        />{" "}
        {/* Password */}
        <Input
          title={"Password"}
          type={"password"}
          name={"password"}
          value={this.state.newUser.password}
          placeholder={"Enter your password"}
          handleChange={this.passwordChangeHandler}
        />{" "}
        {/* Password */}
        <ButtonComponent
          style={buttonStyle}
          action={this.handleFormSubmit}
          type={"primary"}
          title={"submit"}
        />
        <ButtonComponent
          style={buttonStyle}
          action={this.handleFormClear}
          type={"light"}
          title={"clear"}
        />
      </form>
    );
  }
}

const buttonStyle = {
  minWidth: "10em",
  marginTop: "5px",
  marginRight: "10px"
};

export default UserFormContainer;
