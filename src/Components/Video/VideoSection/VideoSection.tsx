import React from "react";
import Modal from "react-modal";
import Video from "../Video/Video"
import "./VideoSection.css";
import Button from "../../../Components/Button/Button/Button";
import YoutubeLogo from "../../../assets/Images/YoutubeLogo.png";
import Section from "../../Section/Section";
Modal.setAppElement("#root");

export interface Props {}

const VideoSection: React.FC<Props> = () => {


  return (
    <div>
      <div className="videosection">
        <div className="videosection__left">
          <Section
            title="HOW TO JOIN"
            subtitle="Easier than you think."
            description="These are things that participats whot have used our features and work says."
            position={true}
          />
          <div className="videosection__buttons">
            <Button name="Apply Now" className="videosection__button"/>
            <div className="videosection__youtube">
              <img
                src={YoutubeLogo}
                alt="Not found"
                className="videosection__image"
              />
              <p className="videosection__text">View more videos</p>
            </div>
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
};

export default VideoSection;
