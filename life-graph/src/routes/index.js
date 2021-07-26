import { PATHS } from "../config";
import LandingPage from "../containers/LandingPage";
import AboutPage from "../containers/AboutPage";
import ContactPage from "../containers/ContactPage";
import LoginPage from "../containers/LoginPage";
import SignupPage from "../containers/SignupPage";

const routes = [
  { path: PATHS.landingPage, exact: true, component: LandingPage },
  { path: PATHS.aboutPage, exact: true, component: AboutPage },
  { path: PATHS.contactPage, exact: true, component: ContactPage },
  { path: PATHS.login, exact: true, component: LoginPage },
  { path: PATHS.signup, exact: true, component: SignupPage },
];

export default routes;
