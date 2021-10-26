import React from "react";
import "./Prize.css";

export interface Props {
  image?: string;
  text?: string;
  price?: string;
}

const Prize: React.FC<Props> = ({ image, text, price }) => {
  return (
    <div className="price">
      <div className="price__image-outer">
        <img src={image} alt={text} className="price__image" />
        <p className="price__text">{text}</p>
      </div>
      <div className="price__value-outer">
        <p className="price__value">{price}</p>
      </div>
    </div>
  );
};

export default Prize;
