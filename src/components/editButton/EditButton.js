import React from "react";
import "./editButton.css";
import { Link } from "react-router-dom";

const EditButton = ({ leadId, lead }) => {
  return (
    <Link to={`/leads/${leadId}/edit`} lead={lead}>
      <div className='edit-button-div'>
        <button
          // data-id={props.leadId}
          className='delete-lead-button'
          // onClick={props.handleDelete}
        >
          Edit Lead
        </button>
      </div>
    </Link>
  );
};

export default EditButton;
