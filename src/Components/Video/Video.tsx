import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./Video.css";
import ReactPlayer from "react-player";
import VideoMedia from "../../assets/Images/Video.mp4";
Modal.setAppElement("#root");

export interface Props {}

const Video: React.FC<Props> = () => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div>
      <div className="video">
        <div className="video__button-position">
          <button
            onClick={() => setmodelaIsOpen(true)}
            className="video__modal-button"
          >
            Modal
          </button>
        </div>
        <ReactPlayer controls url={VideoMedia} muted={false} playing={false} />
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setmodelaIsOpen(false)}
            className="video__modal-video"
            aria-labelledby="contained-modal-title-vcenter"
          >
            <div className="video__container">
              <div className="video__inner-modal">
                <button
                  onClick={() => setmodelaIsOpen(false)}
                  className="video__button-modal"
                >
                  Close
                </button>
              </div>

              <ReactPlayer
                controls
                url={VideoMedia}
                className="react-player"
                muted={false}
                playing={true}
                width={1600}
                height={800}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Video;
