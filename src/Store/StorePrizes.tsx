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
      text: "1st Place",
      price: "1200€",
    },
    {
      image: Locul2,
      text: "1st Place",
      price: "1200€",
    },
    {
      image: Locul3,
      text: "1st Place",
      price: "1200€",
    },
    {
      image: Innovation,
      text: "1st Place",
      price: "1200€",
    },

    {
      image: Popularity,
      text: "1st Place",
      price: "1200€",
    },
    {
      image: Disruptive,
      text: "1st Place",
      price: "1200€",
    },
  ];
  prizes: { image: string; text: string; price: string }[] = this.PRIZES;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new PrizeStore();
