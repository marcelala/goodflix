import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import { useUserData } from "../state/UserDataContext";

import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Page404 from "../pages/404/Page404";
import PasswordRecovery from "../pages/passwordRecovery";

export default function Browser() {
  const { userData } = useUserData();
  //const admin = userData.userRole === "admin";
  //const HomePage = admin ? AdminHome : Home;
  return (
    <BrowserRouter>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={SignIn} />
          <UnauthenticatedRoute path="/register" component={SignUp} />
          <UnauthenticatedRoute path="/recovery" component={PasswordRecovery} />
          <Route path="/404" component={Page404} />
        </ScrollToTop>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
