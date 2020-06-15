// Asynchronized request
const API_URL = process.env.REACT_APP_API_URL;

export const leadSubmitSucess = (lead) => {
  return { type: "SET_LEAD", lead };
};

export const getLeadsSuccess = (leads) => {
  return { type: "SET_LEADS", leads };
};

export const routeToDashBoard = (props) => {
  props.history.push("/");
};

// export const getLeads = (props) => {
//   console.log("here");
//   return (dispatch) => {
//     return fetch(`${API_URL}/leads`, {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ lead: leadData }),
//     })
//       .then((response) => response.json())
//       .then((leads) => {
//         if (leads.error) {
//           alert(leads.error);
//         } else {
//           // remember you may need attributes
//           console.log(leads);
//           dispatch(getLeadsSuccess(leads));
//           routeToDashBoard(props);
//         }
//       });
//   };
// };

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
          alert(lead.error);
        } else {
          // Still need LeadSubmit Reducer
          dispatch(leadSubmitSucess(lead));
          // This isn't working not sure if this is the best way to handle it
          // getLeads(props);
          routeToDashBoard(props);
        }
      });
  };
};
