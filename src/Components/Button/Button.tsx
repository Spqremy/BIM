import React from "react";
import "./Button.css";

export interface Props {
  marginLeft?:string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  onClick?: () => void;
  border?:string;
}

export const Button: React.FC<Props> = ({ name, backgroundColor, onClick,color,border,width,marginLeft }) => {
  return (
    <>
      <button
        className="myButton"
        style={{ background: backgroundColor ,color:color,border:border,width:width,marginLeft:marginLeft}}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
