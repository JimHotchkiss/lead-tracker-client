// Async Actions
const API_URL = process.env.REACT_APP_API_URL;

// Get Current user
export const getCurrentUser = () => {
  console.log("getCurrentUser after login");
  return (dispatch) => {
    return fetch(`${API_URL}/current_user`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("inside action creator", user);
        if (user.error) {
          alert(user.error);
        } else {
          dispatch({ type: "SET_CURRENT_USER", user });
        }
      });
  };
};

// Delete Request - Logout
export const userLogOut = () => {
  console.log("getCurrentUser after page refresh");
  return (dispatch) => {
    dispatch({ type: "LOG_OUT" });
    return fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "DELETE",
    });
  };
};

// POST Request - Login
export const newUserSubmit = (formData) => {
  console.log("inside newUserSubmit");
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
          dispatch({ type: "SET_CURRENT_USER", user });
        }
      });
  };
};
