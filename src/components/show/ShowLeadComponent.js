import React from "react";
import "./showLead.css";
const ShowLeadComponent = (props) => {
  console.log(props);
  return (
    <div className='show-lead-component'>
      <div className='lead-created-title-div'>
        <h3 className='lead-created-title-text'>Date Created</h3>
      </div>
      <div className='contact-name-div'>
        <p className='contact-name-text'>
          {props.convertTime(props.contact.created_at)}
        </p>
      </div>
      <div className='product-title-div'>
        <h3 className='show-lead-title-text'>Product</h3>
      </div>
      <div className='product-div'>
        <p className='product-text'>{props.lead.product}</p>
      </div>
      <div className='description-title-div'>
        <h3 className='description-title-text'>Description</h3>
      </div>
      <div className='description-div'>
        <p className='description-text'>{props.lead.description}</p>
      </div>
      <div className='status-title-div'>
        <h3 className='status-title-text'>Status</h3>
      </div>
      <div className='status-div'>
        <p className='status-text'>{props.lead.status}</p>
      </div>
      <div className='urgency-title-div'>
        <h3 className='urgency-title-text'>Urgency</h3>
      </div>
      <div className='urgency-div'>
        <p
          className='urgency-text'
          style={
            props.lead.urgency === "High"
              ? { color: "red" }
              : props.lead.urgency === "Medium"
              ? { color: "yellow" }
              : { color: "green" }
          }>
          {props.lead.urgency}
        </p>
      </div>
      <div className='contact-name-title-div'>
        <h3 className='contact-name-title-text'>Contact Name</h3>
      </div>
      <div className='contact-name-div'>
        <p className='contact-name-text'>{props.contact.contact_name}</p>
      </div>
      <div className='contact-email-title-div'>
        <h3 className='contact-email-title-text'>Contact Email</h3>
      </div>
      <div className='contact-email-div'>
        <p className='contact-email-text'>{props.contact.email}</p>
      </div>
      <div className='contact-phone-title-div'>
        <h3 className='contact-phone-title-text'>Contact Phone Number</h3>
      </div>
      <div className='contact-number-div'>
        <p className='contact-number-text'>{props.contact.phone_number}</p>
      </div>
    </div>
  );
};

export default ShowLeadComponent;
