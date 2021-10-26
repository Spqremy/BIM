import { FC } from "react";
import Buttons from "../../Components/Button/Buttons/Buttons";

import "./Navigation.css";

import Nav from "../Nav/Nav";

export const Navigation: FC = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav__logo">
          <svg className="nav__logo-image"></svg>
        </div>
        <Nav />
        <div className="nav__buttons-right">
          <Buttons />
        </div>
      </div>
      
    </div>
  );
};

export default Navigation;
