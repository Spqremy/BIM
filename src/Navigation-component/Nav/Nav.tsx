import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export interface Props {}

const Nav: FC = () => {
  return (
    <div className="nav__center-links">
      <ul className="nav__pages">
        <li className="nav__navigationlist-item">
          <NavLink
            exact
            to="/"
            activeClassName="nav__navigationlink--active"
            className="nav__navigationlink"
          >
            Home
            <span className="nav__navigationdot"></span>
          </NavLink>
        </li>
        <li className="nav__navigationlist-item">
          <NavLink
            exact
            to="/Bim"
            activeClassName="nav__navigationlink--active"
            className="nav__navigationlink"
          >
            BIM2021
            <span className="nav__navigationdot"></span>
          </NavLink>
        </li>
        <li className="nav__navigationlist-item">
          <NavLink
            exact
            to="/Regulations"
            activeClassName="nav__navigationlink--active"
            className="nav__navigationlink"
          >
            Regulations
            <span className="nav__navigationdot"></span>
          </NavLink>
        </li>
        <li className="nav__navigationlist-item">
          <NavLink
            exact
            to="/History"
            activeClassName="nav__navigationlink--active"
            className="nav__navigationlink"
          >
            History
            <span className="nav__navigationdot"></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
