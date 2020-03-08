import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = props => {
  return (
    <Button
      style={props.style}
      className={props.type === "primary" ? "btn btn-primary" : "btn btn-light"}
      onClick={props.action}
    >
      {props.title}
    </Button>
  );
};
export default ButtonComponent;
