const initialState = {
  username: "",
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  console.log("clear reducer");
  switch (action.type) {
    case "CLEAR_INPUT":
      return state;
    default:
      return state;
  }
};
