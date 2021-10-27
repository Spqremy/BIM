import "./Benefits.css";
import StoreBenefit from "../../../Store/StoreBenefit"
import Benefit from "../Benefit/Benefit";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

  const {benefits} = StoreBenefit;

const Benefits = () => {
  return (
    <div className="benefits">
      {benefits.map(benefit=>(<Benefit key={uuidv4()} {...benefit}/>))}
    </div>
  );
};

export default Benefits;
