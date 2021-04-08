// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL

export const leadSubmitSucess = (lead) => {
  return { type: "SET_LEAD", lead }
}

export const getLeadsSuccess = (leads) => {
  return { type: "SET_LEADS", leads }
}

export const routeToDashBoard = (props) => {
  props.history.push("/")
}

export const routeToDashBoardFromDelete = (props, message) => {
  props.history.push("/")
  alert(message.message)
}

export const clearLeadForm = () => {
  return { type: "CLEAR_FORM_INPUT" }
}

export const leadSubmit = (leadData, props) => {
  return (dispatch) => {
    return fetch(`${API_URL}/leads`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead: leadData }),
    })
      .then((response) => response.json())
      .then((lead) => {
        if (lead.error) {
          alert(lead.error)
        } else {
          dispatch(leadSubmitSucess(lead))
          dispatch(clearLeadForm())
          routeToDashBoard(props)
        }
      })
  }
}

export const submitEditForm = (editLeadData, props) => {
  return (dispatch) => {
    return fetch(`${API_URL}/leads/${editLeadData.productId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead: editLeadData }),
    })
      .then((response) => response.json())
      .then((updatedLead) => {
        if (updatedLead.error) {
          alert(updatedLead.error)
        } else {
          dispatch(leadSubmitSucess(updatedLead))
          dispatch(clearLeadForm())
          routeToDashBoard(props)
        }
      })
  }
}

export const leadDelete = (data, props) => {
  return (dispatch) => {
    return fetch(`${API_URL}/leads/${data}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((message) => routeToDashBoardFromDelete(props, message))
  }
}
