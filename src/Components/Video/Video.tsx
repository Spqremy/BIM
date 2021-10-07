import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./Video.css";
Modal.setAppElement('#root')

export interface Props {}

const Video: React.FC<Props> = () => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setmodelaIsOpen(true)}>Open</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setmodelaIsOpen(false)}>
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setmodelaIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Video;
