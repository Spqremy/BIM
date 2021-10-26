import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Buttons.css";

const Buttons: FC = () => {
  return (
    <div className="nav__buttons">
      <Button name="LOG IN"  className="nav__button" />
      <NavLink to="Applynow" className="nav__link">
        <Button name="Apply Now"  className="nav__button-second"  />
      </NavLink>
    </div>
  );
};

export default Buttons;
