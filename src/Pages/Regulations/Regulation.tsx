import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard/ProjectCard";
import Success from "../../Components/Success/Success";
import Footer from "../../Footer/Footer";
import { Navigation } from "../../Navigation-component/Navigation/Navigation";
import "./Regulations.css"

export interface Props {}

const Regulations: React.FC<Props> = () => {
  return <div>
    <Navigation />
      <Success subtitle="You have successfully uploaded your project. Good luck and we hope that your idea will be chosen for the final." title="Success!"/>
      <ProjectCard title="Project Title" />
      <Footer/>
  </div>;
};

export default Regulations;
