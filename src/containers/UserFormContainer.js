import React, { Component } from "react";
import "./formContainer.css";
// import Input from "../components/Input";
import ButtonComponent from "../components/ButtonComponent";
import { connect } from "react-redux";
import { updateNewUserForm } from "../actions/newUserForm";
// import clear input action
import { clearInputAction } from "../actions/clearInput";
import { newUserSubmit } from "../actions/newUserSubmit";

class UserFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = this.props.newUserFormData;
    this.props.newUserSubmit(formData);
  }
  handleFormClear(event) {
    event.preventDefault();
    console.log("handle clear");
    this.props.clearInputAction();
  }
  onChangeHandler(event) {
    const { name, value } = event.target;
    // this is the data adding it to state
    const formData = { ...this.props.newUserFormData, [name]: value };
    // This is the action
    this.props.updateNewUserForm(formData);
  }

  render() {
    const { username, email, password } = this.props.newUserFormData;
    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        {/* Username */}
        <div className="form-group">
          <div>
            <label className="form-label" htmlFor="username">
              Username
            </label>
          </div>
          <input
            className="form-input"
            id={Math.ceil(Math.random() * 10)}
            name="username"
            type="text"
            value={username}
            placeholder="Enter Your Username"
            onChange={this.onChangeHandler}
          />
        </div>
        {/* Email */}
        <div className="form-group">
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <input
            className="form-input"
            id={Math.ceil(Math.random() * 10)}
            name="email"
            type="text"
            value={email}
            placeholder="Enter Your Email"
            onChange={this.onChangeHandler}
          />
        </div>
        {/* Password */}
        <div className="form-group">
          <div>
            <label className="form-label" htmlFor="password">
              Email
            </label>
          </div>
          <input
            className="form-input"
            id={Math.ceil(Math.random() * 10)}
            name="password"
            type="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={this.onChangeHandler}
          />
        </div>
        {/* Username */}
        {/* <Input
          title="Username"
          type="text"
          name="username"
          value={username}
          placeholder="Enter your username"
          handleChange={this.onChangeHandler}
        />{" "} */}
        {/* Email */}
        {/* <Input
          title="Email"
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email"
          handleChange={this.onChangeHandler}
        />{" "} */}
        {/* Password */}
        {/* <Input
          title="Password"
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          handleChange={this.onChangeHandler}
        />{" "} */}
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

const mapStateToProps = state => {
  return { newUserFormData: state.currentUser };
};

export default connect(mapStateToProps, {
  updateNewUserForm,
  newUserSubmit,
  clearInputAction
})(UserFormContainer);
