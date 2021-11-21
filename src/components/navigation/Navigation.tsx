import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../../state/AuthenticationContext";
import { logOut } from "../../firebaseServices/authentication";
import logo from "assets/images/logo.svg";
import avatar from "assets/images/avatar-yellow.jpg";
import Icon from "../Icon";
export default function Navigation() {
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  const [showBackground, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      // @ts-ignore
      window.removeEventListener("scroll");
    };
  }, []);

  // Methods
  async function onLogout() {
    const account = await logOut();
    setIsAuthenticated(false);
    history.push("/");
  }
  return (
    <nav className="navigation nav-auth">
      <div className={`nav-content ${showBackground && "nav-content-black"}`}>
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
          <div className="right-corner">
            <li onClick={onLogout}>
              <img src={avatar} alt={"avatar"} className="avatar" />
            </li>
            <li onClick={onLogout}>
              <Icon fileName={"sign-out"} />
            </li>
          </div>
        </ul>
      </div>
      <div className="fade" />
    </nav>
  );
}
