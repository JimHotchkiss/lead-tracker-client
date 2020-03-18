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
    console.log("getCurrentUser");
    return fetch(`${API_URL}/current_user`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch({ type: "SET_CURRENT_USER", user });
        }
      });
  };
};

// POST Request
export const newUserSubmit = formData => {
  return dispatch => {
    return fetch(`${API_URL}/login`, {
      credentials: "include",
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
          dispatch({ type: "SET_CURRENT_USER", user });
        }
      });
  };
};
