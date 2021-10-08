import { makeAutoObservable } from "mobx";
import Image1 from "../assets/Images/Image1.png"

class BenefitStore {
  BENEFITS = [
    {
      title: "benefit 1",
      description: "ceva",
      image: "../assets/Images/Image1.png",
    },
    {
      title: "benefit2",
      description: "ceva",
      image: "path",
    },
    {
      title: "benefit3",
      description: "ceva",
      image: "path",
    },
    {
      title: "benefit4",
      description: "ceva",
      image: "path",
    },
  ];
  benefits: { title: string; description: string; image: string }[] = this.BENEFITS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new BenefitStore();