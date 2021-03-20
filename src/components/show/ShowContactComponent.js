import React from "react"
import "./showContact.css"

function ShowContactComponent({
  id,
  name,
  email,
  phone,
  created_at,
  convertTime,
}) {
  return (
    <div className='contact-show-container'>
      <div className='contact-title'>
        <h3>Customer since </h3>
        <h3 className='contact-date'>{convertTime(created_at)}</h3>{" "}
      </div>
      <div className='contact-name'>
        <h3 className='contact-name-text'>{name}</h3>
      </div>
      <div className='contact-email'>
        <h3 className='contact-email-text'>{email}</h3>
      </div>
      <div className='contact-phone'>
        {console.log(phone)}
        <h3 className='contact-phone-text'>{phone}</h3>
      </div>
    </div>
  )
}

export default ShowContactComponent
