import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./Video.css";
import ReactPlayer from "react-player";
Modal.setAppElement('#root')


export interface Props {}

const Video: React.FC<Props> = () => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div>
      <div className="test1">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=fIYr8hbos_4"
          muted={false}
          playing={false}
        />
        <div className="Test">
          <button onClick={() => setmodelaIsOpen(true)}>aaa</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setmodelaIsOpen(false)}
            className="card__modal"
            aria-labelledby="contained-modal-title-vcenter"
          >
            <button onClick={() => setmodelaIsOpen(false)}>Close</button>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=fIYr8hbos_4"
              muted={false}
              playing={true}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Video;
