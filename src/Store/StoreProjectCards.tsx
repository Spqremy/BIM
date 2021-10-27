import { makeAutoObservable } from "mobx";
import ProjectCard from "../assets/Images/ProjectCard.png";
import Likes from "../assets/Images/ThumbsUp.png";
import Locul1 from "../assets/Images/Locul1.svg";

class CardsProject {
  CARDS = [
    {
      image: ProjectCard,
      icon: Locul1,
      likes: Likes,
      title: "Project Title",
      author: "By: Strujac Alexandru",
    }
  ];
  cards: {
    image: string;
    icon: string;
    likes: string;
    title: string;
    author: string;
  }[] = this.CARDS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new CardsProject();
