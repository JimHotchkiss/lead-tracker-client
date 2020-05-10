// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL;

export const userSubmitSucess = (user) => {
  return { type: "USER_LOGIN", user };
};
// User Login
export const userSubmit = (formData) => {
  console.log("userAsyncActions");
  return (dispatch) => {
    return fetch(`${API_URL}/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: formData }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(userSubmitSucess(user));
        }
      });
  };
};
