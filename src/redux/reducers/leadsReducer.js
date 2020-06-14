export default (state = [], action) => {
  console.log(action.lead, state);
  switch (action.type) {
    case "SET_LEADS":
      return action.leads;
    default:
      return state;
  }
};
