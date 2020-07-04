import React from "react";
import { connect } from "react-redux";
// import { getCurrentUser } from "../../redux/actions/userAsyncActions";

const UserCreate = (props) => {
  return (
    <div className='container-div'>
      <div className='title-div'>
        <h3>Create User</h3>
      </div>
      <form>
        <div className='userName-label'>
          <label>Username:</label>
        </div>
        <div className='userName-input'>
          <input
            // value={username}
            name='username'
            placeholder='Create username'
            type='text'
            // onChange={handleOnChange}
          />
        </div>
        <div className='email-label'>
          <label>Email:</label>
          <div className='email-input'>
            <input
              // value={email}
              name='email'
              placeholder='Enter your email'
              type='text'
              // onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='password-label'>
          <label>Password:</label>
        </div>
        <div className='password-input'>
          <input
            // value={password}
            name='password'
            placeholder='Create password'
            type='password'
            // onChange={handleOnChange}
          />
        </div>
        <div className='confirm-password-label'>
          <label>Confirm Password:</label>
        </div>
        <div className='password-input'>
          <input
            // value={password}
            name='password'
            placeholder='Confirm password'
            type='password'
            // onChange={handleOnChange}
          />
        </div>
        <div className='submit-div'>
          <button className='btn btn-primary'>Create User</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps)(UserCreate);
