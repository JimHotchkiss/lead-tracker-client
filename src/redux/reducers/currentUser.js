export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "CURRENT_USER":
      return action.current_user;
    default:
      return state;
  }
};
