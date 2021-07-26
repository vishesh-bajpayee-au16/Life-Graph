import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Button = ({ text, color, backgroundColor, link }) => {
  return (
    <button style={{ backgroundColor: backgroundColor }}>
      <Link style={{ color: color }} className="linkText" to={link}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
