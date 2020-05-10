const initialState = {
  username: "",
  email: "",
  password: "",
};

// Synchronized request
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_INPUT":
      return action.formData;
    case "CLEAR_USER_INPUT":
      return initialState;
    default:
      return state;
  }
}
