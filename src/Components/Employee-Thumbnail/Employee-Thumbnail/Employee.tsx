import React from "react";
import "./Employee.css";

export interface Props {
  image?: string;
  name?: string;
  position?: string;
}

const Employee: React.FC<Props> = ({ image, name, position }) => {
  return (
    <div className="employee">
      <img src={image} alt={name} className="employee__image" />
      <p className="employee__name">{name}</p>
      <p className="employee__position">{position}</p>
    </div>
  );
};

export default Employee;
