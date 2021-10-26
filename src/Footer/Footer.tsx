import "./Footer.css";
import Arrow from "../assets/Images/Stream.png";
import Teams from "../assets/Images/Teams.png";
export interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <svg className="footer__logo-image"></svg>
        <div className="footer_logos">
          <img src={Arrow} alt={"Not found"} className="footer__arrow" />
          <img src={Teams} alt={"Not found"} className="footer__teams" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
