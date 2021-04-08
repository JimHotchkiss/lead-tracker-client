import React, { useState } from "react"
import { createUserInput } from "../../redux/actions/userSyncActions"
import { createUserSubmit } from "../../redux/actions/userAsyncActions"
import { connect } from "react-redux"
import "./usercreate.css"
// import { setCurrentUser } from "../../redux/actions/userAsyncActions";

const UserCreate = (props) => {
  const [error, setError] = useState("")
  const [checkPassword, setCheckPassword] = useState(false)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    const createUserData = { ...props.createUserData, [name]: value }
    props.createUserInput(createUserData)
  }

  const handleSubmit = (e) => {
    // Prevent normal behavior(reload page)
    e.preventDefault()
    const createUserFormData = props.createUserData
    if (
      props.createUserData.password !== props.createUserData.confirm_password
    ) {
      setCheckPassword(true)
      setError("Passwords don't match.")
    } else {
      setCheckPassword(false)
      props.createUserSubmit(createUserFormData, props)
    }
  }

  const { username, email, password, confirm_password } = props
  return (
    <div className='container-div'>
      <div className='title-div'>
        <h3>Create User</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='userName-label'>
          <label>Username:</label>
        </div>
        <div className='userName-input'>
          <input
            value={username}
            name='username'
            placeholder='Create username'
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
            placeholder='Create Password'
            type='password'
            onChange={handleOnChange}
          />
          <p className='password-error-text'>{checkPassword ? error : null}</p>
        </div>
        <div className='confirm-password-label'>
          <label>Confirm Password:</label>
        </div>
        <div className='confirm-password-input'>
          <input
            value={confirm_password}
            name='confirm_password'
            placeholder='Confirm password'
            type='password'
            onChange={handleOnChange}
          />
          <p className='password-error-text'>{checkPassword ? error : null}</p>
        </div>
        <div className='submit-div'>
          <button className='btn btn-primary'>Create User</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    createUserData: state.createUserInput,
  }
}

export default connect(mapStateToProps, { createUserInput, createUserSubmit })(
  UserCreate
)
