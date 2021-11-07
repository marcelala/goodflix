import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../../state/AuthenticationContext";
import { logOut } from "../../firebaseServices/authentication";
import logo from "assets/images/logo.svg";
import Icon from "../Icon";
export default function Navigation() {
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();

  // Methods
  async function onLogout() {
    const account = await logOut();
    setIsAuthenticated(false);
    history.push("/");
  }
  return (
    <nav className="navigation nav-auth">
      <div className={"nav-content"}>
        <ul>
          <li>
            <NavLink to="/" className="logo">
              <img src={logo} alt="netflix" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse">Home</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
          <li>
            <NavLink to="/new">New & Popular</NavLink>
          </li>
          <li>
            <NavLink to="/my-list">My List</NavLink>
          </li>
          <li onClick={onLogout}>
            <Icon fileName={"sign-out"} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
