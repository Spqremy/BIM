import "./Descriptions.css";
import DescriptionStore from "../../../Store/DescriptionStore"
import Description from "../Description/Description";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

  const {descriptions} = DescriptionStore;

const Descriptions = () => {
  return (
    <div className="description">
      {descriptions.map(description=>(<Description key={uuidv4()}  {...description}/>))}
    </div>
  );
};

export default Descriptions;