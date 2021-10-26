import React from "react";
import "./StudentCard.css";

export interface Props {
  place?: string;
  prize?: string;
  className?:string;
}

const StudentCard: React.FC<Props> = ({ place, prize,className}) => {
  return (
    <div className={className} >
      <p className="studcard__place">{place}</p>
      <p className="studcard__prize">{prize}</p>
    </div>
  );
};

export default StudentCard;
