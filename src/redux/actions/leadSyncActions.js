export const leadFormInput = (leadData) => {
  return {
    type: "LEAD_FORM_INPUT",
    leadData,
  };
};

export const editFormInputAction = (editLeadFormData) => {
  console.log(editLeadFormData);
  const editFormData = {
    // product: "",
    description: "test",
    // urgency: "",
    // status: "",
    // contact_name: "",
    // email: "",
    // phone_number: "",
  };

  return {
    type: "EDIT_FORM_INPUT",
    editLeadFormData,
  };
};

export const populateEditForm = (showTrip) => {
  console.log(showTrip);
};

export const leadSubmit = (formData) => {
  return {
    type: "LEAD_SUBMIT",
    formData,
  };
};
