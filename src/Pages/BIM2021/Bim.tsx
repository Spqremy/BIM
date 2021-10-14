import React from "react";
import PageHero from "../../Components/HeroPage/PageHero";
import { Navigation } from "../../Navigation-component/Navigation";
import "./Bim.css"

export interface Props {}

const Bim: React.FC<Props> = () => {
  return <div>
    <Navigation />
    <PageHero title="BEST INNOVATIVE MINDS 2021" date="OPEN ● 24days, 12h, 41mins Remaining"/>
      Bim
  </div>;
};

export default Bim;
