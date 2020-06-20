import React from "react";
import Button from "react-bootstrap/Button";
import "./deleteButton.css";

const DeleteButton = (props) => {
  console.log(props.handleDelete);
  return (
    <div className='delete-button-div'>
      {" "}
      <Button
        variant='secondary'
        as='input'
        type='submit'
        defaultValue='Delete Lead'
        onChange={props.handleDelete()}
      />
    </div>
  );
};

export default DeleteButton;
