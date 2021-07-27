import React from "react";
import { Link } from "react-router-dom";
import LinkTag from "../../components/Links";
import { PATHS } from "../../config";

import "./index.scss";
const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link className="logo-link" to={PATHS.landingPage}>
          Life Graph
        </Link>
      </h2>
      <div className="links">
        <LinkTag className="link" textcontent="Home" link={PATHS.landingPage} />
        <LinkTag className="link" textcontent="About" link={PATHS.aboutPage} />
        <LinkTag
          className="link"
          textcontent="Contact"
          link={PATHS.contactPage}
        />
      </div>
    </nav>
  );
};

export default Navbar;
