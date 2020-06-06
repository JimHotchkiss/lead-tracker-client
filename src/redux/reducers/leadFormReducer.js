const initialState = {
  product: "",
  lead_description: "",
  urgency: "",
  status: "",
  contact: {
    contact_name: "",
    email: "",
    phone_number: "",
  },
};

// Synchronized request
export default function leadFormReducer(state = initialState, action) {
  console.log(action.leadData);
  switch (action.type) {
    case "LEAD_FORM_INPUT":
      return action.leadData;
    case "CLEAR_FORM_INPUT":
      return initialState;
    default:
      return state;
  }
}
