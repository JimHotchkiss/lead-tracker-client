export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_CONTACT":
      return action.contact;
    default:
      return state;
  }
};
