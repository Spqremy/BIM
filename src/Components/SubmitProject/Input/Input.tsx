import React from "react";
import "./Input.css";

export interface Props {
  placeHolder?:string;
  className?:string;
}

const Input: React.FC<Props> = ({placeHolder,className}) => {
  return (
    <div className="sinput">
      <input
        type="text"
        placeholder={placeHolder}
        className={className}
        name="sinput"
      ></input>
    </div>
  );
};

export default Input;
