import "./Benefits.css";
import StoreBenefit from "../../../Store/StoreBenefit"
import Benefit from "../Benefit";

export interface Props {}

  const {benefits} = StoreBenefit;

const Benefits = () => {
  return (
    <div className="distance">
      {benefits.map(benefit=>(<Benefit {...benefit}/>))}
    </div>
  );
};

export default Benefits;
