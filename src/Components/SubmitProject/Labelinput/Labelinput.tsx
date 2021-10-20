import { WidgetsSharp } from "@mui/icons-material";
import React from "react";
import "./Labelinput.css";

export interface Props {
  name?: string;
  Pholder?: string;
  naming?: string;
  marginLeft?: string;
  width?: string;
  height?: string;
  marginLeftLabel?:string;
}

const Labelinput: React.FC<Props> = ({
  name,
  Pholder,
  naming,
  marginLeft,
  marginLeftLabel,
  width,
  height,
}) => {
  return (
    <div className="input">
      <label className="input__label" style={{marginLeft:marginLeftLabel}}>{name}</label>
      <input
        type="text"
        placeholder={Pholder}
        className="input__form"
        name={naming}
        style={{ marginLeft: marginLeft, width: width, height: height }}
      ></input>
      
    </div>
  );
};

export default Labelinput;
