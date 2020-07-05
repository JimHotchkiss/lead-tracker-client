export const userInput = (formData) => {
  return {
    type: "USER_INPUT",
    formData,
  };
};

export const createUserInput = (createUserData) => {
  return {
    type: "CREATE_USER_INPUT",
    createUserData,
  };
};
