import React from "react";
import Button from "../../Components/Button/Button/Button";
import PageHero from "../../Components/HeroPage/HeroPage/PageHero";
import SubmitProject from "../../Components/SubmitProject/SubmitProject/SubmitProject";
import Votes from "../../Components/Vote/Votes/Votes";
import Footer from "../../Footer/Footer";
import { Navigation } from "../../Navigation-component/Navigation/Navigation";
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
      <div className="points">
        <h1 className="points__title">Vote</h1>
        <div className="points__subtitles">
          <p className="points__subtitle">Classification criteria</p>
          <div className="points__right">
            <p className="points__subtitle">Points</p>
            <p className="points__subtitle">Weight</p>
          </div>
        </div>
        <Votes />
        
        <div className="points__button">
        <hr className="points__line"></hr>
          <Button name="Submit Vote" className="points__button-submit"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
