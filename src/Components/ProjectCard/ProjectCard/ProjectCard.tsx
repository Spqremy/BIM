import React from "react";
import "./ProjectCard.css";


export interface Props {
  image?: string;
  icon?: string;
  likes?: string;
  title?: string;
  author?: string;
}

const ProjectCard: React.FC<Props> = ({
  image,
  icon,
  likes,
  title,
  author,
}) => {
  return (
    <div className="price">
      <img src={image} alt="Not found"></img>
      <img src={icon} alt="Not found" />
      <div className="price__title">
        <h3>{title}</h3>
        <img src={likes} alt="Not found" />
        <p>1</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
