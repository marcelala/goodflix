import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import { UserDataProvider, useUserData } from "../state/UserDataContext";
import Footer from "./footer/Footer";
import Page404 from "../pages/404/Page404";
import PasswordRecovery from "../pages/passwordRecovery";
import Navigation from "./navigation/Navigation";
import { useAuthentication } from "../state/AuthenticationContext";
import Browse from "../pages/browse/index";
import AuthenticatedRoute from "./AuthenticatedRoute";
import NavigationUnauth from "./navigation/NavigationUnauth";

export default function Browser() {
  //const { userData } = useUserData();
  const { isAuthenticated } = useAuthentication();

  //const admin = userData.userRole === "admin";
  //const HomePage = admin ? AdminHome : Home;
  const Nav = isAuthenticated ? Navigation : NavigationUnauth;
  return (
    <UserDataProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <UnauthenticatedRoute path="/register" component={SignUp} />
          <UnauthenticatedRoute path="/recovery" component={PasswordRecovery} />
          <AuthenticatedRoute path="/browse" component={Browse} />
          <Route path="/404" component={Page404} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserDataProvider>
  );
}
