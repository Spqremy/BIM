import React from "react";
import "./Home.css";
import Image1 from "../../assets/Images/Image1.png";
import Image2 from "../../assets/Images/Image2.png";
import Cristi from "../../assets/Images/Cristi.png";
import Benefits from "../../Components/Benefit/Benefits/Benefits";
import Benefit from "../../Components/Benefit/Benefit";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Video from "../../Components/Video/Video";
import Employee from "../../Components/Employee-Thumbnail/Employee";
import Section from "../../Components/Section/Section";

export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <Benefits/>
      home
      <Video />
      <div className="testimonials">
        <Employee
          name="Cristian Spoiala"
          position="Chief Tehnical Officer"
          image={Cristi}
        />

        <Testimonial
          image={Image2}
          description="Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs."
          name="Gabriel Timoreac"
          position="Head of Gaming Development"
        />
        <Benefit
          image={Image1}
          title="Benefit 1"
          description="Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud."
        />

        <Section
          title="Testimonials"
          subtitle="What Participants Say"
          description="These are things that participats whot have used our features and work says."
          position={false}
        />
        <Section
          title="Testimonials"
          subtitle="What Participants Say"
          description="These are things that participats whot have used our features and work says."
          position={true}
        />
      </div>
    </div>
  );
};

export default Home;
