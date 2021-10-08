import "./Benefits.css";
import StoreBenefit from "../../../Store/StoreBenefit"
import Benefit from "../Benefit";

export interface Props {}

  const {benefits} = StoreBenefit;

const Benefits = () => {
  return (
    <div className="test">
      {benefits.map(benefit=>(<Benefit {...benefit}/>))}
    </div>
  );
};

export default Benefits;
