import "./Prizes.css";
import StorePrizes from "../../../Store/StorePrizes";
import Prize from "../Prize/Prize";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

const { prizes } = StorePrizes;

const Prizes = () => {
  return (
    <div className="prizes">
      {prizes.map((prize) => (
        <Prize key={uuidv4()} {...prize} />
      ))}
    </div>
  );
};

export default Prizes;
