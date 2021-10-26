import { makeAutoObservable } from "mobx";


//de intrebat despre componenta

class Votes {
  VOTES = [
    {
      title: "Consistency and clarity",
    //   input:<Input width="132px" height="32px" placeHolder="0-100 points"/>,
      procents: "10%",
    },

    {
      title: "Creativity in presenting the idea",
      procents: "10%",
    },

    {
      title: "The technical quality of the solution",
      procents: "20%",
    },
    {
      title: "The organizational quality of the solution",
      procents: "20%",
    },
    {
      title:
        "New technologies / new techniques proposed for the implementation of the idea",
      procents: "10%",
    },
    {
      title: "Technological impact",
      procents: "15%",
    },
    {
      title: "Social / individual benefits",
      procents: "15%",
    },

    {
      title:
        "Bonus points: Participation and involvement in stage 1 of coaching",
      procents: "100%",
    },
  ];
  votes: {
    title: string;
    // input: Element;
    procents: string;
  }[] = this.VOTES;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Votes();
