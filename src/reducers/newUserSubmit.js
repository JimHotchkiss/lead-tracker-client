export default (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.user;
    default:
      return state;
  }
};
