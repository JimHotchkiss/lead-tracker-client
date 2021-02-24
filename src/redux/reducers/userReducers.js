const initialState = {
  username: "",
  email: "",
  password: "",
}

// Synchronized request
export default function userReducer(state = initialState, action) {
  console.log(action.type, action.user)
  switch (action.type) {
    case "USER_INPUT":
      return action.formData
    case "CLEAR_USER_INPUT":
      return initialState
    case "USER_LOGIN":
      return action.user
    case "USER_LOGOUT":
      return null
    default:
      return state
  }
}
