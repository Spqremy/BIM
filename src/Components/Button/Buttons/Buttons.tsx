import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Buttons.css";

const Buttons: FC = () => {
  return (
    <div className="nav__buttons-right-inner">
      <Button name="LOG IN" color="#979c9c" backgroundColor="white" />
      <NavLink to="Applynow">
        <Button name="Apply Now" color="white" border="none" />
      </NavLink>
    </div>
  );
};

export default Buttons;
