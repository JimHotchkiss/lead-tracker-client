import React from "react";
import "./leadsManager.css";
import ShowContact from "./ShowContact";
import ShowLead from "./ShowLead";
const LeadDetails = () => {
  return (
    <div className='manage-leads-div'>
      <div className='show-lead-component'>
        <ShowLead />
      </div>
      <div className='show-contact-component'>
        <ShowContact />
      </div>
    </div>
  );
};

export default LeadDetails;
