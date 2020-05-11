export default (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case "USER_LOGIN":
      return action.user;
    case "USER_LOGOUT":
      return null;
    default:
      return state;
  }
};
