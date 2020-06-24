const initialState = {
  // product: "",
  description: "",
  // urgency: "",
  // status: "",
  // contact_name: "",
  // email: "",
  // phone_number: "",
};

// Synchronized request
export default function editFormReducer(state = initialState, action) {
  console.log(action.editLeadFormData);
  switch (action.type) {
    case "EDIT_FORM_INPUT":
      return action.editLeadFormData;
    //   case "CLEAR_FORM_INPUT":
    //     return initialState;
    default:
      return state;
  }
}
