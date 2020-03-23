import React, { Component } from "react";
import "./formContainer.css";
import ButtonComponent from "../components/ButtonComponent";
import { connect } from "react-redux";
import { updateNewUserForm, clearUserInput } from "../actions/newUserForm";
import { newUserSubmit, getLeads } from "../actions/newUserSubmit";
import RepDashboardContainer from "./RepDashboardContainer";

class UserFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = this.props.newUserFormData;
    this.props.newUserSubmit(formData);
    this.props.clearUserInput();
    this.props.getLeads();
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
    const submitButton = () => {
      return (
        <ButtonComponent
          style={buttonStyle}
          action={this.handleFormSubmit}
          type={"primary"}
          title={"submit"}
        />
      );
    };
    const renderForm = () => {
      return (
        <div className="form-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-div">
              <div className="form-group">
                <div>
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>
                <input
                  className="form-input"
                  name="username"
                  type="text"
                  value={username}
                  placeholder="Enter Your Username"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <div>
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  className="form-input"
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <div>
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  className="form-input"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div>{submitButton()}</div>
            </div>
          </form>
        </div>
      );
    };

    return (
      <div>
        <div>{!this.props.currentUser ? renderForm() : null}</div>

        <div className="dashboard">
          {this.props.currentUser ? <RepDashboardContainer /> : null}
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  minWidth: "10em",
  marginTop: "5px",
  marginRight: "10px"
};

const mapStateToProps = state => {
  return {
    newUserFormData: state.userInput,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {
  updateNewUserForm,
  newUserSubmit,
  clearUserInput,
  getLeads
})(UserFormContainer);
