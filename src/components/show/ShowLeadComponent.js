import React from "react";
const ShowLeadComponent = (props) => {
  console.log(props);
  return (
    <div className='show-lead-component'>
      <div className='product-div'>
        <p className='product-text'>{props.lead.product}</p>
      </div>
      <div className='description-div'>
        <p className='description-text'>{props.lead.description}</p>
      </div>
      <div className='status-div'>
        <p className='status-text'>{props.lead.status}</p>
      </div>
      <div className='urgency-div'>
        <p className='urgency-text'>{props.lead.urgency}</p>
      </div>
      <div className='contact-name-div'>
        <p className='contact-name-text'>{props.contact.contact_name}</p>
      </div>
      <div className='contact-email-div'>
        <p className='contact-email-text'>{props.contact.email}</p>
      </div>
      <div className='contact-number-div'>
        <p className='contact-number-text'>{props.contact.phone_number}</p>
      </div>
    </div>
  );
};

export default ShowLeadComponent;
