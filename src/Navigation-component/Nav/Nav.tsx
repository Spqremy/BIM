import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export interface Props {}

const Nav: FC = () => {
  return (
    <div className="nav__Center-links">
      <ul className="nav__pages">
        <NavLink exact to="/" activeClassName="active" className="nav__text">
          <li className="nav__row">Home</li>
          <span className="point"></span>
        </NavLink>
        <NavLink to="/Bim" activeClassName="active" className="nav__text">
          <li className="nav__row">BIM 2021</li>
          <span className="point"></span>
        </NavLink>
        <NavLink
          to="/Regulations"
          activeClassName="active"
          className="nav__text"
        >
          <li className="nav__row">Regulations</li>
          <span className="point"></span>
        </NavLink>
        <NavLink to="/History" activeClassName="active" className="nav__text">
          <li className="nav__row">History</li>
          <span className="point"></span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
