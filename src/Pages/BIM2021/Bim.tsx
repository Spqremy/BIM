import React from "react";
import Description from "../../Components/Description/Description";
import PageHero from "../../Components/HeroPage/PageHero";
import StudentCard from "../../Components/StudentCard/StudentCard";
import { Navigation } from "../../Navigation-component/Navigation";
import "./Bim.css";

export interface Props {}

const Bim: React.FC<Props> = () => {
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
    </div>
  );
};

export default Bim;
