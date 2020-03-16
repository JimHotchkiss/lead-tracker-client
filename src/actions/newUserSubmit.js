// Async Actions
const API_URL = process.env.REACT_APP_API_URL;

// GET Request
export const getUsers = formData => {
  return dispatch => {
    return fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(newUser => {
        console.log(newUser);
      });
  };
};

// POST Request
export const newUserSubmit = formData => {
  return dispatch => {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: formData })
    });
    // .then(response => response.json())
    // .then(newUserData => dispatch({ type: "SIGN_IN", payload: newUserData }));
  };
};
