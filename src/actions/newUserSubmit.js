// Action Creator
export const newUserSubmit = formData => {
  console.log("Action creator", formData);
  return {
    type: "SUBMIT_USER",
    formData
  };
};
