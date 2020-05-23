export default (state = [], action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.contacts;
    default:
      return state;
  }
};
