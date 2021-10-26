import "./Votes.css";
import StoreVote from "../../../Store/StoreVote";
import Vote from "../Vote/Vote";

export interface Props {}

const { votes } = StoreVote;

const Votes = () => {
  return (
    <div className="votes">
      {votes.map((vote) => (
        <Vote {...vote} />
      ))}
    </div>
  );
};

export default Votes;
