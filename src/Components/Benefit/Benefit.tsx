import React from "react";
import "./Benefit.css";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

export interface Props {
  image?: string;
  title?: string;
  description?: string;
}

const Benefit: React.FC<Props> = ({ title, description, image }) => {
  
  const [modalIsOpen, setmodelaIsOpen] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <a className="card__button" onClick={() => setmodelaIsOpen(true)}>
        Learn more{" "}
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodelaIsOpen(false)}
        className="card__modal"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <button onClick={() => setmodelaIsOpen(false)}>Close</button>
        <img src={image} alt={title} className="card__image" />
        <h4 className="card__title">{title}</h4>
        <p className="card__description">{description}</p>
      </Modal>
    </div>
  );
};

export default Benefit;
