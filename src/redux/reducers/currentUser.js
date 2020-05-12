export default (state = null, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return action.current_user;
    default:
      return state;
  }
};
