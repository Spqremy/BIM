import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Video from "../Video"
import "./VideoSection.css";
import Button from "../../../Components/Button/Button";
import YoutubeLogo from "../../../assets/Images/YoutubeLogo.png";
import Section from "../../Section/Section";
Modal.setAppElement("#root");

export interface Props {}

const VideoSection: React.FC<Props> = () => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div>
      <div className="video-Section">
        <div className="video-Section__left">
          <Section
            title="HOW TO JOIN"
            subtitle="Easier than you think."
            description="These are things that participats whot have used our features and work says."
            position={true}
          />
          <div className="video-Section__buttons">
            <Button name="Apply Now" color="white" border="none" width="10%" />
            <div className="video-Section__youtube">
              <img
                src={YoutubeLogo}
                alt="No image found"
                className="video-Section__image"
              />
              <p className="video-Sectiion__text">View more videos</p>
            </div>
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
};

export default VideoSection;
