import React from "react";
import PageHero from "../../Components/HeroPage/PageHero";
import SubmitProject from "../../Components/SubmitProject/SubmitProject";
import Footer from "../../Footer/Footer";
import { Navigation } from "../../Navigation-component/Navigation";
import "./History.css";

export interface Props {}

const History: React.FC<Props> = () => {
  return (
    <div>
      <Navigation />
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        date="OPEN ● 24days, 12h, 41mins Remaining"
        description="Description"
        entries="Entries"
      />
      <SubmitProject />
      <Footer />
    </div>
  );
};

export default History;
