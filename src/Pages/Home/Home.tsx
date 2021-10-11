import React from "react";
import "./Home.css";
import Benefits from "../../Components/Benefit/Benefits/Benefits";
import Testimonials from "../../Components/Testimonial/Testimonials/Testimonials";
// import Video from "../../Components/Video/Video";
import Section from "../../Components/Section/Section";
import Locul1 from "../../assets/Images/Locul1.svg"
import Modal from "react-modal";
import { useState } from "react";
import Video from "../../Components/Video/Video";
import Footer from "../../Footer/Footer";
import Prize from "../../Components/Prize/Prize";
import Prizes from "../../Components/Prize/Prizes/Prizes";
Modal.setAppElement("#root");

export interface Props {}

const Home: React.FC<Props> = () => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div>
      home
      <div className="Section">
        <Section
          title="WHY TO JOIN?"
          subtitle="Benefits & Advantages"
          description="While we can customize your plan to suit your needs, most clients schedule regular services:"
          position={false}
        />
      </div>
      <div className="Section">
        <Benefits />
      </div>
      <div className="outer">
        <div className="outer__employee-section">
          <Section
            title="Testimonials"
            subtitle="What Participants Say"
            description="These are things that participats whot have used our features and work says."
            position={true}
          />
        </div>
      </div>
      <Testimonials />
      {/* <div className="testimonials">
        <Employee
          name="Cristian Spoiala"
          position="Chief Tehnical Officer"
          image={Cristi}
        />
      </div> */}
      <Video />
      <Prizes/>

      <Prize image={Locul1} text="ascaa" price="13214$"/>
      <Footer/>
    </div>
  );
};

export default Home;
