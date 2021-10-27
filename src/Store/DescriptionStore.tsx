import { makeAutoObservable } from "mobx";

class DescriptionStore {
  DESCRIPTION = [
    {
      title: "Description",
      subtitle:
        "Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis vestibulum est.",
      text:
        "Proin lacinia libero dapibus blandit egestas. Donec a semper nisi, rutrum fringilla nibh.",
      text2:
        "Maecenas scelerisque nulla in dapibus gravida. Aliquam tortor ipsum, sagittis at mi nec, vehicula dapibus dolor. Aenean eu massa maximus, euismod felis quis, ullamcorper lacus. Nunc cursus est nec dui lacinia pretium. Nam placerat id sem et ullamcorper. ",
      question: "You're a student?",
      text3:
        "Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis vestibulum est.",
    },
  ];
  descriptions: {
    title: string;
    subtitle: string;
    text: string;
    text2: string;
    question: string;
    text3: string;
  }[] = this.DESCRIPTION;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new DescriptionStore();
