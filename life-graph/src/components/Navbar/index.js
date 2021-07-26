import React from "react";
import LinkTag from "../../components/Links";
import { PATHS } from "../../config";
import "./index.scss";
const Navbar = () => {
  return (
    <nav>
      <h2>life graph </h2>
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
