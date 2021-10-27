import "./Votes.css";
import StoreVote from "../../../Store/StoreVote";
import Vote from "../Vote/Vote";
import { v4 as uuidv4 } from "uuid";

export interface Props {}

const { votes } = StoreVote;

const Votes = () => {
  return (
    <div className="votes">
      {votes.map((vote) => (
        <Vote key={uuidv4()} {...vote} />
      ))}
    </div>
  );
};

export default Votes;
