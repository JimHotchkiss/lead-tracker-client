export const leadFormInput = (leadData) => {
  console.log(leadData);
  return {
    type: "LEAD_FORM_INPUT",
    leadData,
  };
};

export const leadSubmit = (formData) => {
  return {
    type: "LEAD_SUBMIT",
    formData,
  };
};
