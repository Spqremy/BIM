import Prizes from "../../Prize/Prizes/Prizes";
import "./Description.css";

export interface Props {
  title?: string;
  subtitle?: string;
  text?: string;
  text2?: string;
  text3?: string;
  prize?: string;
}
const Description: React.FC<Props> = ({
  title,
  subtitle,
  prize,
  text,
  text2,
  text3,
}) => {
  return (
    <div className="description">
      <div className="description__text">
        <h1 className="description__title-desc">{title}</h1>
        <div className="description__subtitle">
          {subtitle}
          <h4>{text}</h4>
          {text2}
        </div>
        <h1>{title}</h1>
        <p>{text3}</p>
      </div>
      <div className="description__container">
        <div className="description__prizes">
          <h1 className="description__title">{prize}</h1>
          <Prizes />
        </div>
      </div>
    </div>
  );
};

export default Description;
