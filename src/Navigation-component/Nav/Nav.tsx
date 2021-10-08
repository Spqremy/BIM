import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export interface Props {}

const Nav: FC = () => {
  return (
    <div className="nav__Center-links">
      <ul className="nav__pages">
        <li className="navigationlist-item">
          <NavLink
            exact
            to="/"
            activeClassName="navigationlink--active"
            className="navigationlink"
          >
            Home
            <span className="navigationdot"></span>
          </NavLink>
        </li>
        <li className="navigationlist-item">
          <NavLink
            exact
            to="/Bim"
            activeClassName="navigationlink--active"
            className="navigationlink"
          >
            BIM2021
            <span className="navigationdot"></span>
          </NavLink>
        </li>
        <li className="navigationlist-item">
          <NavLink
            exact
            to="/Regulations"
            activeClassName="navigationlink--active"
            className="navigationlink"
          >
            Regulations
            <span className="navigationdot"></span>
          </NavLink>
        </li>
        <li className="navigationlist-item">
          <NavLink
            exact
            to="/History"
            activeClassName="navigationlink--active"
            className="navigationlink"
          >
            History
            <span className="navigationdot"></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
