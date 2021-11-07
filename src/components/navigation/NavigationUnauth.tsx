import { NavLink } from "react-router-dom";
import logo from "assets/images/logo.svg";
export default function NavigationUnauth() {
  return (
    <nav className="navigation nav-unauth">
      <div className={"nav-content"}>
        <ul>
          <li>
            <NavLink to="/" className="logo">
              <img src={logo} alt="netflix" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
