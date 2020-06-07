// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL;

export const leadSubmitSucess = (lead) => {
  return { type: "LEAD_SUBMIT", lead };
};

export const leadSubmit = (formData, props) => {
  return (dispatch) => {
    return fetch(`${API_URL}/leads`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead: formData }),
    })
      .then((response) => response.json())
      .then((lead) => {
        if (lead.error) {
          alert(lead.error);
        } else {
          // remember you may need attributes
          dispatch(leadSubmitSucess(lead.data));
          // routeToDashBoard(props);
        }
      });
  };
};
