import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

const ButtonComponent = props => {
  return (
    <div className="button-div">
      <Button
        style={props.style}
        className={
          props.type === "primary" ? "btn btn-primary" : "btn btn-light"
        }
        onClick={props.action}
      >
        {props.title}
      </Button>
    </div>
  );
};
export default ButtonComponent;
