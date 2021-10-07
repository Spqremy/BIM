import React from "react";
import "./Testimonial.css";

export interface Props {
  image?: string;
  description?: string;
  name?: string;
  position?: string;
}

const Testimonial: React.FC<Props> = ({
  image,
  description,
  name,
  position,
}) => {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial__image" />
      <h4 className="testimonial__description">{description}</h4>
      <hr className="testimonial__line"></hr>
      <p className="testimonial__name">{name}</p>
      <a className="testimonial__position">{position}</a>
    </div>
  );
};

export default Testimonial;
