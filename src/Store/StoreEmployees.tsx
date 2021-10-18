import { makeAutoObservable } from "mobx";
import Employee1 from "../assets/Images/Employee1.png";
import Employee2 from "../assets/Images/Employee2.png";
import Employee3 from "../assets/Images/Employee3.png";
import Employee4 from "../assets/Images/Employee1.png";

class EmployeesStore {
  EMPLOYEES = [
    {
      image: Employee1,
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
    {
      image: Employee2,
      name: "Victor Jeman",
      position: "Head of Front-End Technologies",
    },
    {
      image: Employee3,
      name: "Gabriel Timoreac",
      position: "Head of Gaming Development",
    },
    {
      image: Employee4,
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
    {
      image: Employee4,
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
    {
      image: Employee4,
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
    {
      image: Employee4,
      name: "Adrian Onu",
      position: "Chief Operating Officer",
    },
  ];
  employees: {
    image: string;
    name: string;
    position: string;
  }[] = this.EMPLOYEES;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new EmployeesStore();
