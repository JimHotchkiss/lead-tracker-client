// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL;

export const getCurrentUserSuccess = (user) => {
  return { type: "CURRENT_USER", user };
};
export const getLeadsSuccess = (leads) => {
  return { type: "SET_LEADS", leads };
};
export const getContactsSuccess = (contacts) => {
  return { type: "SET_CONTACTS", contacts };
};

export const clearLeadsSuccess = () => {
  console.log("clear leads");
  return { type: "CLEAR_LEADS" };
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
          dispatch(getLeadsSuccess(user.data.attributes.leads));
          dispatch(getContactsSuccess(user.data.attributes.contacts));
        } else {
          dispatch(getCurrentUserSuccess(user.data.attributes));
          dispatch(getLeadsSuccess(user.data.attributes.leads));
          dispatch(getContactsSuccess(user.data.attributes.contacts));
        }
      });
  };
};

export const userLogOutSuccess = () => {
  return { type: "USER_LOGOUT" };
};

export const userLogOut = () => {
  return (dispatch) => {
    console.log("userLogOut");
    dispatch(userLogOutSuccess());
    dispatch(clearLeadsSuccess());
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
  console.log(formData);
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

// Create User
export const createUserSubmit = (createUserFormData, props) => {
  console.log(createUserFormData);
  return (dispatch) => {
    return fetch(`${API_URL}/users`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: createUserFormData }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          console.log(user.data);
          // dispatch(userSubmitSucess(user.data.attributes));
          // routeToDashBoard(props);
        }
      });
  };
};
