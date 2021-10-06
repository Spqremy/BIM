import React from "react";
import "./Button.css";

export interface Props {
  name?: string;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  border?:string;
}

export const Button: React.FC<Props> = ({ name, backgroundColor, onClick,color,border }) => {
  return (
    <>
      <button
        className="myButton"
        style={{ background: backgroundColor ,color:color,border:border}}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
