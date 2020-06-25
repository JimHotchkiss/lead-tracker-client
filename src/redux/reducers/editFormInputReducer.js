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
export default function editFormInputReducer(state = initialState, action) {
  switch (action.type) {
    case "POPULATE_EDIT_FORM":
      return action.editFormData;
    default:
      return state;
  }
}
