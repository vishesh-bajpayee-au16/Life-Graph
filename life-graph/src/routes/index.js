import { PATHS } from "../config";
import LandingPage from "../containers/LandingPage";
import AboutPage from "../containers/AboutPage";
import ContactPage from "../containers/ContactPage";

const routes = [
  { path: PATHS.landingPage, exact: true, component: LandingPage },
  { path: PATHS.aboutPage, exact: true, component: AboutPage },
  { path: PATHS.contactPage, exact: true, component: ContactPage },
];

export default routes;
