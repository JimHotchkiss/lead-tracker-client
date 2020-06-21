import React from "react";
import "./editButton.css";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  console.log(props);
  return (
    <Link to={`/leads/${props.leadId}/edit`}>
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
