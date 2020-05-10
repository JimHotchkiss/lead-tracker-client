import React, { useState } from "react";

const Login = () => {
  const [value, setValue] = useState("");
  return (
    <div className='container-fluid'>
      <form>
        <div>
          <label>Login</label>
        </div>
        <input placeholder='' />
      </form>
    </div>
  );
};

export default Login;
