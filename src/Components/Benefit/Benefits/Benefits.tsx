import "./Benefits.css";
import StoreBenefit from "../../../Store/StoreBenefit"
import Benefit from "../Benefit/Benefit";

export interface Props {}

  const {benefits} = StoreBenefit;

const Benefits = () => {
  return (
    <div className="benefits">
      {benefits.map(benefit=>(<Benefit {...benefit}/>))}
    </div>
  );
};

export default Benefits;
