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
      <div className='contact-title-div'>
        <h1 className='contact-title-text'>Contact Information</h1>
      </div>
      <div className='contact'>
        <h3 className='contact-title'>Customer since </h3>
        <h3 className='contact-text'>{convertTime(created_at)}</h3>{" "}
      </div>
      <div className='contact'>
        <h3 className='contact-title'> Contact Name:</h3>
        <h3 className='contact-text'>{name}</h3>
      </div>
      <div className='contact'>
        <h3 className='contact-title'>Contact Email</h3>
        <h3 className='contact-text'>{email}</h3>
      </div>
      <div className='contact'>
        <h3 className='contact-title'>Contact Phone</h3>
        <h3 className='contact-text'>{phone}</h3>
      </div>
    </div>
  )
}

export default ShowContactComponent
