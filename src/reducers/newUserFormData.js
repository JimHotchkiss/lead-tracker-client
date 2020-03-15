const initialState = {
  username: "",
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.formData;
    default:
      return state;
  }
};
