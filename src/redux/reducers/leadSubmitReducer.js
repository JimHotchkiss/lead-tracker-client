export default (state = [], action) => {
  switch (action.type) {
    case "SET_LEAD":
      return action.lead;
    default:
      return state;
  }
};
