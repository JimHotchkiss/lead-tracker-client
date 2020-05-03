export const clearUserInput = () => {
  return {
    type: "CLEAR_USER_INPUT",
  };
};
export const updateNewUserForm = (formData) => {
  return {
    type: "CREATE_USER",
    formData,
  };
};
