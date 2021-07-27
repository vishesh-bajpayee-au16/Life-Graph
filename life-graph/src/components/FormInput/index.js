import React from "react";
import "./index.scss";

const FormInput = ({ type, id, label, width, onChangeInp }) => {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => onChangeInp(e.target)}
        style={{ width: width }}
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormInput;
