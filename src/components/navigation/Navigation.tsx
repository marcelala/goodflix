import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../../state/AuthenticationContext";
import { logOut } from "../../firebaseServices/authentication";
import logo from "assets/images/logo.svg";
import Icon from "../Icon";
export default function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  const history = useHistory();

  const signIn = (
    <li>
      <NavLink to="login">
        <Icon fileName={"sign-in"} />
      </NavLink>
    </li>
  );
  const signOut = (
    <li onClick={onLogout}>
      <Icon fileName={"sign-out"} />
    </li>
  );
  const signToShow = isAuthenticated ? signOut : signIn;

  // Methods
  async function onLogout() {
    const account = await logOut();
    setIsAuthenticated(false);
    history.push("/");
  }
  return (
    <nav className="navigation">
      <div className={"nav-content"}>
        <ul>
          <li>
            <NavLink to="/" className="logo">
              <img src={logo} alt="netflix" />
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/home">Series</NavLink>
              </li>
              <li>
                <NavLink to="/home">Films</NavLink>
              </li>
              <li>
                <NavLink to="/home">New & Popular</NavLink>
              </li>
              <li>
                <NavLink to="/home">My List</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
