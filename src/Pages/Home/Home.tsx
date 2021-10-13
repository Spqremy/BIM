import React from "react";
import "./Home.css";
import Benefits from "../../Components/Benefit/Benefits/Benefits";
import Testimonials from "../../Components/Testimonial/Testimonials/Testimonials";
// import Video from "../../Components/Video/Video";
import Section from "../../Components/Section/Section";
import Button from "../../Components/Button/Button";
import Mouse from "../../assets/Images/Mouse.png";
import YoutubeLogo from "../../assets/Images/YoutubeLogo.png";
import Title1 from "../../assets/Images/Title1.png";
import Line from "../../assets/Images/Line.png";
import VideoSection from "../../Components/Video/VideoSection/VideoSection"
import Modal from "react-modal";
import PrizesImage from "../../assets/Images/Prize.png";
import Video from "../../Components/Video/Video";
import Footer from "../../Footer/Footer";
import BackGroundFirst from "../../assets/Images/BackgroundFirst.png";
import Prizes from "../../Components/Prize/Prizes/Prizes";
Modal.setAppElement("#root");

export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <img
          src={BackGroundFirst}
          alt="Image not found"
          className="Backgroundfirstimage"
        />
        <div className="container">
          <p className="container__text">Inn v</p>
            <p className="container__text">ation.</p>
            <img
              src={Line}
              alt="Image not found"
              className="container__line-image"
            />
          <div className="container__bottom">
            <div className="container__button"></div>
            <p className="container__description">
              Create value by applying novel solutions to meaningful problems
            </p>
          </div>
          <img src={Mouse} alt="Image not found" className="container__mouse" />
        </div>
      </div>
      <div className="secondbackground">
        <div className="secondbackground__Section">
          <Section
            title="WHY TO JOIN?"
            subtitle="Benefits & Advantages"
            description="While we can customize your plan to suit your needs, most clients schedule regular services:"
            position={false}
          />
        </div>
        <div className="secondbackground__Section">
          <Benefits />
        </div>
        <div className="secondbackground__outer">
          <div className="secondbackground__employee-section">
            <Section
              title="Testimonials"
              subtitle="What Participants Say"
              description="These are things that participats whot have used our features and work says."
              position={true}
            />
          </div>
        </div>
        <Testimonials />
      </div>
      <div className="prize-section">
        <div className="prize-section__left">
          <img src={PrizesImage} alt="Prizes" />
        </div>
        <div className="prize-section__right">
          <Section
            title="PRIZES"
            subtitle="What you can win?"
            description="These are things that participants who have used our features and works says."
            position={true}
          />

          <Prizes />
        </div>
      </div>
      <VideoSection/>
      <Footer />
    </div>
  );
};

export default Home;
