import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className='container'>
      <form>
        <div className='userName-label'>
          <label>Username:</label>
        </div>
        <div className='userName-input'>
          <input type='text' onChange={handleUserNameChange} />
        </div>
        <div className='password-label'>
          <label>Password:</label>
        </div>
        <div className='password-input'>
          <input type='password' onChange={handlePasswordChange} />
        </div>
      </form>
      {userName}
      {password}
    </div>
  );
};

export default Login;
