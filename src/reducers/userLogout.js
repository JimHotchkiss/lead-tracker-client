export default (state = null, action) => {
  console.log("in logout reducer");
  switch (action.type) {
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
};
