import React from "react";
import "./Button.css";

export interface Props {
  marginLeft?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  onClick?: () => void;
  border?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  marginBottom?: string;
  height?:string;
}

export const Button: React.FC<Props> = ({
  name,
  backgroundColor,
  onClick,
  color,
  border,
  width,
  height,
  marginLeft,
  fontWeight,
  fontSize,
  lineHeight,
  marginBottom,
}) => {
  return (
    <>
      <button
        className="myButton"
        style={{
          background: backgroundColor,
          color: color,
          border: border,
          width: width,
          marginLeft: marginLeft,
          fontWeight: fontWeight,
          fontSize: fontSize,
          lineHeight: lineHeight,
          marginBottom: marginBottom,
          height: height,
        }}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
