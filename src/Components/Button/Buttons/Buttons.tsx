import {FC} from "react";
import Button from "../Button";
import "./Buttons.css";

const Buttons:FC = () => {
  return (
    <div className="nav__Buttons-Right-inner">
      <Button name="LOG IN" color="#979c9c" backgroundColor="white" />
      <Button name="Apply Now" color="white" border="none" />
    </div>
  );
};

export default Buttons;
