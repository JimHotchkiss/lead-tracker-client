export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    case "LOG_OUT":
      return null;
    default:
      return state;
  }
};
