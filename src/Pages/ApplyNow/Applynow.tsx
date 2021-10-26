import React from "react";
import { useState } from "react";
import LoginButton from "../../Components/LoginButton/LoginButton";
import "./Applynow.css";

export interface Props {}

const ApplyNow: React.FC<Props> = () => {
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(false);

  const handleClick1 = () => {
    if (!leftButton && !rightButton) {
      setLeftButton(!leftButton);
    } else if (!leftButton && rightButton) {
      setLeftButton(!leftButton);
      setRightButton(!rightButton);
    } else if (leftButton) {
      setLeftButton(!leftButton);
    }
  };
  const handleClick2 = () => {
    if (!leftButton && !rightButton) {
      setRightButton(!rightButton);
    } else if (leftButton && !rightButton) {
      setRightButton(!rightButton);
      setLeftButton(!leftButton);
    } else if (rightButton) {
      setRightButton(!rightButton);
    }
  };

  return (
    <div className="applynow">
      <div className="applynow__logo">
        <svg className="applynow__logo-image"></svg>
      </div>
      <div className="applynow__buttons-container">
        <div className="applynow__buttons">
          <LoginButton
            name="I have an ideea"
            onClick={handleClick1}
            checked={leftButton}
          />
          <LoginButton
            name="I want to team up"
            onClick={handleClick2}
            checked={rightButton}
          />
        </div>
      </div>
      <div className="applynow__buttonlogin">
        <button className="applynow__login-button">
          Login with your Office 365 Account
        </button>
      </div>
    </div>
  );
};

export default ApplyNow;
