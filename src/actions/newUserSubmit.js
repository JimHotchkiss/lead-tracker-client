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

// Get Current user
export const getCurrentUser = () => {
  return dispatch => {
    console.log("in dispatch");
    return fetch(`${API_URL}/current_user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(currentUser => {
        console.log(currentUser);
        if (currentUser.error) {
          alert(currentUser.error);
        } else {
          dispatch({ type: "GET_CURRENT_USER", currentUser });
        }
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
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch({ type: "SIGN_IN", user });
        }
      });
  };
};
