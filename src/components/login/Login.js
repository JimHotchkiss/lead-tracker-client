import React from "react";
import { connect } from "react-redux";
import { userInput } from "../../redux/actions/userSyncActions";
import { userSubmit, userLogOut } from "../../redux/actions/userAsyncActions";

import "./login.css";

const Login = (props) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const formData = { ...props.userData, [name]: value };
    props.userInput(formData);
  };

  const handleSubmit = (e) => {
    console.log(e.target.name);
    // Prevent normal behavior(reload page)
    e.preventDefault();
    const formData = props.userData;
    props.userSubmit(formData);
    // Clear userInput
    // perhaps call redirect in here?
  };

  const handleLogOUt = (e) => {
    e.preventDefault();
    props.userLogOut();
  };

  const { username, email, password } = props.userInput;
  return (
    <div className='container '>
      <div className='title-div'></div>
      <form onSubmit={handleSubmit}>
        <div className='userName-label'>
          <label>Username:</label>
        </div>
        <div className='userName-input'>
          <input
            value={username}
            name='username'
            placeholder='Enter your username'
            type='text'
            onChange={handleOnChange}
          />
        </div>
        <div className='email-label'>
          <label>Email:</label>
          <div className='email-input'>
            <input
              value={email}
              name='email'
              placeholder='Enter your email'
              type='text'
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='password-label'>
          <label>Password:</label>
        </div>
        <div className='password-input'>
          <input
            value={password}
            name='password'
            placeholder='Enter your password'
            type='password'
            onChange={handleOnChange}
          />
        </div>
        <div className='submit-div'>
          {/* <input value='submit' type='submit' /> */}
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <input value='logout' type='submit' onClick={handleLogOUt} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userInput,
  };
};

export default connect(mapStateToProps, { userInput, userSubmit, userLogOut })(
  Login
);
