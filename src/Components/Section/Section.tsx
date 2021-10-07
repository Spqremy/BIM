import React from "react";
import "./Section.css";

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  position?: true | false;
}

const Section: React.FC<Props> = ({
  title,
  subtitle,
  description,
  position,
}) => {
  return (
    <div className={position ? "section" : "section--modified"}>
      <h2 className={position ? "section_title" : "section_title--modified"}>
        {title}
      </h2>
      <h4
        className={
          position ? "section__subtitle" : "section__subtitle--modified"
        }
      >
        {subtitle}
      </h4>
      <p
        className={
          position ? "section__description" : "section__description--modified"
        }
      >
        {description}
      </p>
    </div>
  );
};

export default Section;
