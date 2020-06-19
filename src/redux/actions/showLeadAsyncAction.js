const API_URL = process.env.REACT_APP_API_URL;

export const showLeadSuccess = (lead) => {
  return { type: "SHOW_LEAD", lead };
};

export const routeToShowLead = (props, lead) => {
  props.history.push(`/leads/${lead.id}/show`);
};

export const showLeadAction = (leadData, props) => {
  console.log(leadData);
  return (dispatch) => {
    console.log(leadData, props);
    dispatch({ type: "START_ADDING_LEAD" });
    fetch(`${API_URL}/leads/${leadData}`)
      .then((response) => response.json())
      .then((lead) => {
        if (lead.error) {
          alert(lead.error);
        } else {
          dispatch(showLeadSuccess(lead));
          routeToShowLead(props, lead);
        }
      });
  };
};
