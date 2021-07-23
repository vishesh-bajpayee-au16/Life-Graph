import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const LinkTag = ({ textcontent, link }) => {
  return (
    <Link className="link" to={link}>
      {textcontent}
    </Link>
  );
};

export default LinkTag;
