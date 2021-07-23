import React from "react";
import { PATHS } from "../../config";
import LinkTag from "../../components/Links";
const LandingPage = () => {
  return (
    <div>
      <LinkTag textcontent="about" link={PATHS.aboutPage} />
      <LinkTag textcontent="contact" link={PATHS.contactPage} />
    </div>
  );
};

export default LandingPage;
