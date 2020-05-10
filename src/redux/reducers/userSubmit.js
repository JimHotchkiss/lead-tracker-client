export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "USER_SUBMIT":
      return action.user;
    case "LOG_OUT":
      return null;
    default:
      return state;
  }
};
