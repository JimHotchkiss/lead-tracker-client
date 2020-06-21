const API_URL = process.env.REACT_APP_API_URL;

export const showLeadSuccess = (lead) => {
  return { type: "SHOW_LEAD", lead };
};

export const showLeadContactSuccess = (leadContact) => {
  return { type: "SHOW_LEAD_CONTACT", leadContact };
};

export const showLeadAction = (leadData, props) => {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_LEAD" });
    fetch(`${API_URL}/leads/${leadData}`)
      .then((response) => response.json())
      .then((lead) => {
        if (lead.error) {
          alert(lead.error);
        } else {
          dispatch(showLeadSuccess(lead.data.attributes));
          dispatch(showLeadContactSuccess(lead.data.attributes.contact));
        }
      });
  };
};
