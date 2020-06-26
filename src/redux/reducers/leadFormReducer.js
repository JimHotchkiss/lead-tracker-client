const initialState = {
  product: "",
  description: "",
  urgency: "",
  status: "",
  contact_name: "",
  email: "",
  phone_number: "",
};

// Synchronized request
export default function leadFormReducer(state = initialState, action) {
  switch (action.type) {
    case "LEAD_FORM_INPUT":
      // const returnValue = {
      //   ...state,
      //   [action.leadData.name]: action.leadData.value,
      // };
      return action.leadData;
    case "CLEAR_FORM_INPUT":
      return initialState;
    case "POPULATE_EDIT_FORM":
      return action.editFormData;
    default:
      return state;
  }
}
