// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL

export const getCurrentUserSuccess = (user) => {
  return { type: "CURRENT_USER", user }
}

export const clearCurrentUser = () => {
  return { type: "CLEAR_CURRENT_USER" }
}

export const getLeadsSuccess = (leads) => {
  return { type: "SET_LEADS", leads }
}
export const getContactsSuccess = (contacts) => {
  return { type: "SET_CONTACTS", contacts }
}

export const clearContactsSuccess = (contacts) => {
  return { type: "CLEAR_CONTACTS", contacts }
}

export const clearLeadsSuccess = () => {
  return { type: "CLEAR_LEADS" }
}

export const clearCreateUserInput = () => {
  return { type: "CLEAR_USER_INPUT" }
}

// Get Current User
export const getCurrentUser = (props) => {
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
          routeToLogin(props)
        } else {
          dispatch(getCurrentUserSuccess(user.data.attributes))
          dispatch(getLeadsSuccess(user.data.attributes.leads))
          dispatch(getContactsSuccess(user.data.attributes.contacts))
        }
      })
      .catch((error) => console.log(error))
  }
}

export const userLogOutSuccess = () => {
  return { type: "USER_LOGOUT" }
}

export const userLogOut = () => {
  return (dispatch) => {
    dispatch(userLogOutSuccess())
    dispatch(clearCurrentUser())
    dispatch(clearLeadsSuccess())
    dispatch(clearContactsSuccess())
    return fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "DELETE",
    })
  }
}

export const userSubmitSucess = (user) => {
  return { type: "USER_LOGIN", user }
}

export const createUserSubmitSucess = (user) => {
  return { type: "CREATE_USER", user }
}

export const routeToDashBoard = (props) => {
  props.history.push(`/`)
}

export const routeToLogin = (props) => {
  if (props.history) {
    console.log(props.history)
    props.history.push(`/login`)
  }
}

export const setCurrentUser = (user) => {
  return { type: "CURRENT_USER", user }
}

export const loadingUserLogin = () => {
  return { type: "LOADING_USER" }
}

// User Login
export const userLogin = (formData, props) => {
  return (dispatch) => {
    dispatch(loadingUserLogin())
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
          alert(user.error)
        } else {
          dispatch(userSubmitSucess(user.data.attributes))
          dispatch(setCurrentUser(user.data.attributes))
          dispatch(getLeadsSuccess(user.data.attributes.leads))
          dispatch(getContactsSuccess(user.data.attributes.contacts))
          dispatch(clearCreateUserInput())
          routeToDashBoard(props)
        }
      })
      .catch((error) => console.log(error))
  }
}

// Create User
export const createUserSubmit = (createUserFormData, props) => {
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
          alert(user.error)
        } else {
          console.log(user.data.attributes)
          dispatch(getCurrentUser(user.data.attributes))
          dispatch(createUserSubmitSucess(user))
          dispatch(getLeadsSuccess(user.data.attributes.leads))
          dispatch(getContactsSuccess(user.data.attributes.contacts))
          dispatch(clearCreateUserInput())
          routeToDashBoard(props)
        }
      })
      .catch((error) => console.log(error))
  }
}
