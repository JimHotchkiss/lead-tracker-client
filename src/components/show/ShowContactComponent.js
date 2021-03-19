import React from "react"
import "./showContact.css"

function ShowContactComponent({
  id,
  name,
  email,
  phone_number,
  created_at,
  convertTime,
}) {
  return <div className='contact-show-container'>{convertTime(created_at)}</div>
}

export default ShowContactComponent
