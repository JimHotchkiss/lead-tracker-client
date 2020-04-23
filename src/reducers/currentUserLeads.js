export default (state = null, action) => {
  switch (action.type) {
    case "SET_USER_LEADS":
      return action.user_leads;
    default:
      return state;
  }
};
