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
export default function editFormReducer(state = initialState, action) {
  switch (action.type) {
    case "EDIT_FORM_INPUT":
      return action.editFormData;
    //   case "CLEAR_FORM_INPUT":
    //     return initialState;
    default:
      return state;
  }
}
