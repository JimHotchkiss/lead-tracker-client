export const populateEditForm = (editLeadFormData) => {
  console.log(editLeadFormData);
  return {
    type: "EDIT_FORM_INPUT",
    editLeadFormData,
  };
};
