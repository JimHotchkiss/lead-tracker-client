import React from "react";
import "./inputStyle.css";

const Input = props => {
  return (
    <div className="form-group">
      <div>
        <label className="form-label" htmlFor={props.name}>
          {props.title}
        </label>
      </div>
      <input
        className="form-input"
        id={props.username}
        name={props.username}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default Input;
