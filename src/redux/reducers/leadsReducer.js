export default (state = [], action) => {
  switch (action.type) {
    case "SET_LEADS":
      return action.leads;
    default:
      return state;
  }
};
