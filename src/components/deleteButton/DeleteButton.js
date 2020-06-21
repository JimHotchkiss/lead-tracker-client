import React from "react";
// import Button from "react-bootstrap/Button";
import "./deleteButton.css";

const DeleteButton = (props) => {
  return (
    <div className='delete-button-div'>
      {" "}
      <button
        data-id={props.leadId}
        className='delete-lead-button'
        onClick={props.handleDelete}>
        Delete Lead{" "}
      </button>
      {/* <Button
        variant='secondary'
        as='input'
        type='submit'
        defaultValue='Delete Lead'
        onChange={props.handleDelete()}
      /> */}
    </div>
  );
};

export default DeleteButton;
