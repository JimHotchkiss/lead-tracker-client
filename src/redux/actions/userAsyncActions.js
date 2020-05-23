// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL;

export const getCurrentUserSuccess = (user) => {
  return { type: "CURRENT_USER", user };
};
export const getAttributesSuccess = (attributes) => {
  return { type: "SET_ATTRIBUTES", attributes };
};

// Get Current User
export const getCurrentUser = () => {
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
        if (user.error) {
          dispatch(getCurrentUserSuccess(user.data.attributes));
          dispatch(getAttributesSuccess(user.included));
        } else {
          dispatch(getCurrentUserSuccess(user.data.attributes));
          dispatch(getAttributesSuccess(user.included));
        }
      });
  };
};

export const userLogOutSuccess = () => {
  return { type: "USER_LOGOUT" };
};

export const userLogOut = () => {
  return (dispatch) => {
    dispatch(userLogOutSuccess());
    return fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "DELETE",
    });
  };
};

export const userSubmitSucess = (user) => {
  return { type: "USER_LOGIN", user };
};

export const routeToDashBoard = (props) => {
  props.history.push("/");
};

export const setCurrentUser = (user) => {
  return { type: "CURRENT_USER", user };
};

// User Login
export const userSubmit = (formData, props) => {
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
          dispatch(userSubmitSucess(user.data.attributes));
          routeToDashBoard(props);
        }
      });
  };
};
