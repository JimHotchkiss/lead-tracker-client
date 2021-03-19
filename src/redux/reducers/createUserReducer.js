const initialState = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
}

// Synchronized request
export default function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER_INPUT":
      return action.createUserData
    case "CREATE_USER":
      return action.user
    case "CLEAR_USER_INPUT":
      return initialState
    default:
      return state
  }
}
