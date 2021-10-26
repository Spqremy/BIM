import React from "react";
import "./Labelinput.css";

export interface Props {
  name?: string;
  Pholder?: string;
  naming?: string;
  className?:string;
}

const Labelinput: React.FC<Props> = ({
  name,
  Pholder,
  naming,
  className
}) => {
  return (
    <div className="input">
      <label className={className} >{name}</label>
      <input
        type="text"
        placeholder={Pholder}
        className="input__form"
        name={naming}
      ></input>
    </div>
  );
};

export default Labelinput;
