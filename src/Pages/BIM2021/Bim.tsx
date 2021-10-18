import React, { useState } from "react";
import Description from "../../Components/Description/Description";
import Employees from "../../Components/Employee-Thumbnail/Employees/Employees";
import PageHero from "../../Components/HeroPage/PageHero";
import StudentCard from "../../Components/StudentCard/StudentCard";
import Footer from "../../Footer/Footer";
import { Navigation } from "../../Navigation-component/Navigation";
import "./Bim.css";

export interface Props {}

const Bim: React.FC<Props> = () => {
  const [activeTabIndexX, setActiveTabIndexX] = useState<number>(1);

  function handleTabClick(activeTabIndexX: number) {
    setActiveTabIndexX(activeTabIndexX);
  }
  return (
    <div>
      <Navigation />
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        date="OPEN ● 24days, 12h, 41mins Remaining"
        description="Description"
        entries="Entries"

      />
      <Description />
      <div className="cards">
        <StudentCard
          width="27%"
          place="1st place"
          prize="175E + Paid internship"
        />
        <StudentCard
          width="27%"
          place="1st place"
          prize="175E + Paid internship"
        />
        <StudentCard
          width="27%"
          place="1st place"
          prize="175E + Paid internship"
        />
      </div>
      <div className="employee-container">
        <h1 className="employee__title">Meet the Jury</h1>
        <Employees />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Bim;
