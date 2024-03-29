const API_URL = process.env.REACT_APP_API_URL

export const showContactSuccess = (contact) => {
  return { type: "SHOW_CONTACT", contact }
}

export const showContactAction = (contactData, props) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CONTACT" })
    fetch(`${API_URL}/contacts/${contactData}`)
      .then((response) => response.json())
      .then((contact) => {
        if (contact.error) {
          alert(contact.error)
        } else {
          dispatch(showContactSuccess(contact))
        }
      })
  }
}
