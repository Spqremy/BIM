import "./ProjectCards.css";
import ProjectCard from "../../../Store/StoreProjectCards"
import Card from "../ProjectCard/ProjectCard";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

  const {cards} = ProjectCard;

const ProjectCards = () => {
  return (
    <div className="a">
      {cards.map(card=>(<Card key={uuidv4()} {...card}/>))}
    </div>
  );
};

export default ProjectCards;
