import { makeAutoObservable } from "mobx";
import Benefit1 from "../assets/Images/Benefit1.png"
import Benefit2 from "../assets/Images/Benefit2.png"
import Benefit3 from "../assets/Images/Benefit3.png"
import Benefit4 from "../assets/Images/Benefit4.png"


class BenefitStore {
  BENEFITS = [
    {
      title: "benefit1",
      description: "Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud.",
      image: Benefit1,
    },
    {
      title: "benefit2",
      description: "Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud.",
      image: Benefit2,
    },
    {
      title: "benefit3",
      description: "Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud.",
      image: Benefit3,
    },
    {
      title: "benefit4",
      description: "Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud.",
      image: Benefit4,
    },
  ];
  benefits: { title: string; description: string; image: string }[] = this.BENEFITS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new BenefitStore();