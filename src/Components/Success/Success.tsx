import React from "react";
import "./Success.css";
import SuccessImg from "../../assets/Images/Success.png"
import Button from "../Button/Button/Button";

export interface Props {
  title?: string;
  subtitle?: string;
}

const Success: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="success">
        <h1 className="success__title">{title}</h1>
        <img src={SuccessImg} alt="Not found"/>
      <p className="success__subtitle">{subtitle}</p>
      <Button className="success__button" name="Go to HomePage" />
    </div>
  );
};

export default Success;
