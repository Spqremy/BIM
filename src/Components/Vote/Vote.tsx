import React from "react";
import Input from "../SubmitProject/Input/Input";
import "./Vote.css";

export interface Props {
  title?: string;
  procents?: string;
}

const Vote: React.FC<Props> = ({ title, procents }) => {
  return (
    <div className="vote">
      <hr className="vote__line"></hr>
      <div className="vote__down">
        <h3 className="vote__title">{title}</h3>
        <div className="vote__right">
          <Input width="132px" height="32px" placeHolder="0-100 points" />
          <h3 className="vote__procents">{procents}</h3>
        </div>
      </div>
    </div>
  );
};

export default Vote;
