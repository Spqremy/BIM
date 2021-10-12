import { makeAutoObservable } from "mobx";
import Locul1 from "../assets/Images/Locul1.svg";
import Locul2 from "../assets/Images/Locul2.svg";
import Locul3 from "../assets/Images/Locul3.svg";
import Innovation from "../assets/Images/Innovation.svg";
import Popularity from "../assets/Images/Popularity.svg";
import Disruptive from "../assets/Images/Disruptive.svg";

class PrizeStore {
  PRIZES = [
    {
      image: Locul1,
      text: "1nd Place",
      price: "1200€",
    },
    {
      image: Locul2,
      text: "2nd Place",
      price: "900€",
    },
    {
      image: Locul3,
      text: "3rd Place",
      price: "650€",
    },
    {
      image: Innovation,
      text: "Most Disruptive Technology Award",
      price: "500€",
    },

    {
      image: Popularity,
      text: "ASSIST Innovation Lab",
      price: "500€",
    },
    {
      image: Disruptive,
      text: "ASSIST Popularity Award",
      price: "350€",
    },
  ];
  prizes: { image: string; text: string; price: string }[] = this.PRIZES;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new PrizeStore();
