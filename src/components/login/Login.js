import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className='container '>
      <form>
        <div className='userName-label'>
          <label>Username:</label>
        </div>
        <div className='userName-input'>
          <input
            placeholder='Username'
            type='text'
            onChange={handleUserNameChange}
          />
        </div>
        <div className='email-label'>
          <label>Email:</label>
          <div className='email-input'>
            <input
              placeholder='Email'
              type='text'
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className='password-label'>
          <label>Password:</label>
        </div>
        <div className='password-input'>
          <input
            placeholder='Password'
            type='password'
            onChange={handlePasswordChange}
          />
        </div>
        <div className='submit-div'>
          <button type='button' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
      {userName}
      {password}
      {email}
    </div>
  );
};

export default Login;
