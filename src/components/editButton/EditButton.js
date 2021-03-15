import React from "react"
import "./editButton.css"
import { Link } from "react-router-dom"

const EditButton = ({ leadId, lead }) => {
  return (
    <Link to={`/leads/${leadId}/edit`} lead={lead}>
      <div className='edit-button-div'>
        <button className='delete-lead-button'>Edit Lead</button>
      </div>
    </Link>
  )
}

export default EditButton
