import React from "react";
import "./Benefit.css";

export interface Props {
  image?: string;
  title?: string;
  description?: string;
}

const Benefit: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <a className="card__button">Learn more</a>
    </div>
  );
};

export default Benefit;
