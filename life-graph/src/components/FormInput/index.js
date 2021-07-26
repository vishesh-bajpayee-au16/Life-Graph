import React from "react";
import "./index.scss";

const FormInput = ({ type, id, label, width }) => {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input style={{ width: width }} id={id} type={type} />
    </div>
  );
};

export default FormInput;
