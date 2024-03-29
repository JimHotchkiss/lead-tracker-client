import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { userInput } from "../../redux/actions/userSyncActions"
import { userLogin } from "../../redux/actions/userAsyncActions"
import "./login.css"

const Login = (props) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target
    const formData = { ...props.userData, [name]: value }
    props.userInput(formData)
  }

  const handleSubmit = (e) => {
    // Prevent normal behavior(reload page)
    e.preventDefault()
    const formData = props.userData
    props.userLogin(formData, props)
  }

  const { username, email, password } = props.userInput

  return (
    <div className='container-div'>
      <div className='title-div'>
        <h3>User Login</h3>
      </div>
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
          <button className='btn btn-primary'>Login</button>
        </div>
        <div className='or-text-div'>
          <p>or</p>
        </div>
        <div className='create-account-text-div'>
          <NavLink to='/users/new' style={{ textDecoration: "none" }}>
            <p>Create User</p>
          </NavLink>{" "}
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userInput,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { userInput, userLogin })(Login)
