import React from "react";
import "./Success.css";
import SuccessImg from "../../assets/Images/Success.png"
import Button from "../Button/Button";

export interface Props {
  title?: string;
  subtitle?: string;
}

const Success: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="success">
        <h1 className="success__title">{title}</h1>
        <img src={SuccessImg} alt="Image not found"/>
      <p className="success__subtitle">{subtitle}</p>
      <Button border="1px solid #33C9D3" width="10%" color="#33C9D3" name="Go to HomePage" backgroundColor="white"/>
    </div>
  );
};

export default Success;
