export default (state = [], action) => {
  switch (action.type) {
    case "SET_ATTRIBUTES":
      return action.attributes;
    default:
      return state;
  }
};
