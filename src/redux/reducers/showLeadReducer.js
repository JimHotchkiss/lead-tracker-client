export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_LEAD":
      return action.lead;
    default:
      return state;
  }
};
