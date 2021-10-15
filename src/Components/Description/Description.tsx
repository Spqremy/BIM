import Prizes from "../Prize/Prizes/Prizes";
import "./Description.css";

export interface Props {}
const Description: React.FC<Props> = ({}) => {
  return (
    <div className="description">
      <div className="description__text">
        <h1 className="description__title-desc">Description</h1>
        <p className="description__subtitle">
          Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet
          blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque
          porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus
          justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus
          dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas
          porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros
          lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non
          quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis
          vestibulum est.
          <h3>
            Proin lacinia libero dapibus blandit egestas. Donec a semper nisi,
            rutrum fringilla nibh.
          </h3>
          Maecenas scelerisque nulla in dapibus gravida. Aliquam tortor ipsum,
          sagittis at mi nec, vehicula dapibus dolor. Aenean eu massa maximus,
          euismod felis quis, ullamcorper lacus. Nunc cursus est nec dui lacinia
          pretium. Nam placerat id sem et ullamcorper.
        </p>
        <h1>You're a student?</h1>
        <p>
          Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet
          blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque
          porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus
          justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus
          dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas
          porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros
          lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non
          quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis
          vestibulum est.
        </p>
      </div>
      <div className="description__container">
        <div className="description__prizes">
          <h1 className="description__title">Prizes</h1>
          <Prizes />
        </div>
      </div>
    </div>
  );
};

export default Description;
