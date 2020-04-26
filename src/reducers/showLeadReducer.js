const initialState = {
  lead: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LEAD":
      return action.formData;
    case "CLEAR_LEAD":
      return initialState;
    default:
      return state;
  }
};
