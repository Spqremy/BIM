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
      <h3 className="vote__title">{title}</h3>
      <div className="vote__right">
        <Input width="40%"/>
        <h3>{procents}</h3>
      </div>
    </div>
  );
};

export default Vote;
