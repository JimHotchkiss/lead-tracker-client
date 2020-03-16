const initialState = {
  users: [],
  username: "",
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log(action.payload);
    case "CREATE_USER":
      return action.formData;
    default:
      return state;
  }
};
