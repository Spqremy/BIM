import { makeAutoObservable } from "mobx";
import Testimonial1 from "../assets/Images/Testimonial1.png"
import Testimonial2 from "../assets/Images/Testimonial2.png"
import Testimonial3 from "../assets/Images/Testimonial3.png"


class TestimonailStore {
  TESTIMONALS = [
    {
      image: Testimonial1,
      description:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
    {
      image: Testimonial2,
      description:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Victor Jeman",
      position: "Head of Front-End Technologies",
    },
    {
      image: Testimonial3,
      description:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Gabriel Timoreac",
      position: "Head of Gaming Development",
    },

  ];
  testimonials: {
    image: string;
    description: string;
    name: string;
    position: string;
  }[] = this.TESTIMONALS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new TestimonailStore();
