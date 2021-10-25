import React from "react";
import "./Input.css";

export interface Props {
  placeHolder?:string;
  width?:string;
  height?:string;
  border?:string;
  color?:string;
  points?:number;
}

const Input: React.FC<Props> = ({placeHolder,width,height,border,color,points}) => {
  return (
    <div className="sinput">
      <input
        type="text"
        placeholder={placeHolder}
        className="sinput__form"
        style={{width:width,height:height,border:border,color:color}}
        name="sinput"
      ></input>
    </div>
  );
};

export default Input;
