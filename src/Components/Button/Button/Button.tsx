import React from "react";
import "./Button.css";

export interface Props {
  name?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<Props> = ({ name, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};
export default Button;
