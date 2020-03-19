const initialState = {
  users: [],
  username: "",
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.formData;
    case "CLEAR_USER_INPUT":
      return initialState;
    default:
      return state;
  }
};
