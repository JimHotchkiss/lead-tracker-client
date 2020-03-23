// Async Actions
const API_URL = process.env.REACT_APP_API_URL;

// GET Leads
export const getLeads = () => {
  return dispatch => {
    return fetch(`${API_URL}/leads`)
      .then(response => response.json())
      .then(leads => {
        dispatch({ type: "GET_LEADS", leads });
      });
  };
};

// Get Current user
export const getCurrentUser = () => {
  return dispatch => {
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

// Delete Request - Logout
export const userLogOut = () => {
  return dispatch => {
    dispatch({ type: "LOG_OUT" });
    return fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "DELETE"
    });
  };
};

// POST Request - Login
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
