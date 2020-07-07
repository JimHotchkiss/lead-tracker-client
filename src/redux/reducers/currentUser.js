export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "CURRENT_USER":
      return action.user;
    case "USER_LOGOUT":
      return null;
    default:
      return state;
  }
};
