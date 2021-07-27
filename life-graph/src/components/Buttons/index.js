import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Button = ({ text, color, backgroundColor, link }) => {
  return (
    // <button type={type}>
    <Link
      style={{ color: color, backgroundColor: backgroundColor }}
      className="linkText"
      to={link}
    >
      {text}
    </Link>
    // {/* </button> */}
  );
};

export default Button;
