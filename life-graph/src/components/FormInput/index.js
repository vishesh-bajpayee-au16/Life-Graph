import React from "react";
import "./index.scss";

const FormInput = ({ type, id, label, width, onChangeInp, placeholder }) => {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        onChange={(e) => onChangeInp(e.target)}
        style={{ width: width }}
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormInput;
