import React from "react";
import "./StudentCard.css";

export interface Props {
  place?: string;
  prize?: string;
  width?: string;
}

const StudentCard: React.FC<Props> = ({ place, prize, width }) => {
  return (
    <div className="studcard" style={{ width: width }}>
      <p className="studcard__place">{place}</p>
      <p className="studcard__prize">{prize}</p>
    </div>
  );
};

export default StudentCard;
