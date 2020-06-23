export const leadFormInput = (leadData) => {
  return {
    type: "LEAD_FORM_INPUT",
    leadData,
  };
};

// export const editFormInputAction = (leadData) => {
//   return {
//     type: "LEAD_FORM_INPUT",
//     leadData,
//   };
// };

export const populateEditForm = (showTrip) => {
  console.log(showTrip);
};

export const leadSubmit = (formData) => {
  return {
    type: "LEAD_SUBMIT",
    formData,
  };
};
