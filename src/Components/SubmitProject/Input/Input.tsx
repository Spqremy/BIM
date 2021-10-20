import React from "react";
import "./Input.css";

export interface Props {}

const Input: React.FC<Props> = ({}) => {
  return (
    <div className="sinput">
      <input
        type="text"
        placeholder="Team member Name"
        className="sinput__form"
        name="sinput"
      ></input>
    </div>
  );
};

export default Input;
