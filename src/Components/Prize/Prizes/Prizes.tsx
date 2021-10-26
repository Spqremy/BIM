import "./Prizes.css";
import StorePrizes from "../../../Store/StorePrizes";
import Prize from "../Prize/Prize";

export interface Props {}

const { prizes } = StorePrizes;

const Prizes = () => {
  return (
    <div className="prizes">
      {prizes.map((prize) => (
        <Prize {...prize} />
      ))}
    </div>
  );
};

export default Prizes;
