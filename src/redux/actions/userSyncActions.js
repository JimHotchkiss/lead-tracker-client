export const userInput = (formData) => {
  return {
    type: "USER_INPUT",
    formData,
  };
};

export const userSubmit = (formData) => {
  return {
    type: "USER_SUBMIT",
    formData,
  };
};
