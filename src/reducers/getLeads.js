export default (state = null, action) => {
  switch (action.type) {
    case "GET_LEADS":
      return action.leads;
    default:
      return state;
  }
};
