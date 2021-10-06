import { FC } from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../Components/Button/Buttons/Buttons";

import "./Navigation.css";

export const Navigation: FC = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <svg className="nav__logo-image"></svg>
      </div>
      <div className="nav__Center-links">
        <ul className="nav__pages">
          <NavLink exact to="/" activeClassName="active" className="nav__text">
            <li className="nav__row">Home</li>
          </NavLink>
          <NavLink to="/Bim" activeClassName="active" className="nav__text">
            <li className="nav__row">BIM 2021</li>
          </NavLink>
          <NavLink
            to="/Regulations"
            activeClassName="active"
            className="nav__text"
          >
            <li className="nav__row">Regulations</li>
          </NavLink>
          <NavLink to="/History" activeClassName="active" className="nav__text">
            <li className="nav__row">History</li>
          </NavLink>
        </ul>
      </div>
      <div className="nav__Buttons-Right">
        <Buttons />
      </div>
    </div>
  );
};

export default Navigation;
