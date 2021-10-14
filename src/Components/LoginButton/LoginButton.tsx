import React from "react";
import "./LoginButton.css";
import CheckCircle from "../../assets/Images/CheckCircle.png";

export interface Props {
  checked?: true | false;
  name?: string;
  onClick?: () => void;
}

const LoginButton: React.FC<Props> = ({ name, checked, onClick }) => {
  return (
    <div>
      <button
        className={!checked ? "loginbutton" : "loginbutton--modifier"}
        onClick={onClick}
      >
        <img src={CheckCircle} className="loginbutton__check" />
        <div className="loginbutton__name">
          {name}
        </div>
      </button>
    </div>
  );
};

export default LoginButton;
