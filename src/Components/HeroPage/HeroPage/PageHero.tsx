import React from "react";
import "./PageHero.css";
import Button from "../../Button/Button/Button";
import { NavLink } from "react-router-dom";


export interface Props {
  title?: string;
  date?: string;
  description?: string;
  entries?: string;
  onChange?: () => number;
  activeTabIndex?: number;
}

const PageHero: React.FC<Props> = ({
  title,
  date,
  entries,
  description,
  onChange,
  activeTabIndex,
}) => {
  return (
    <div>
      <div className="pagehero">
        <div className="pagehero__container">
          <div className="pagehero__text">
            <h1 className="pagehero__title">{title}</h1>
            <div className="pagehero__container-date">
              <p className="pagehero__date">{date}</p>
            </div>
          </div>
          <div className="pagehero__container-links">
            {/* <Tabs
              firstTabContent="ccc"
              secondTabContent="aaa"
              onChange={onChange}
              activeTabIndex={activeTabIndex}
            /> */}
            <ul className="pagehero__links">
              <li className="pagehero__navigationlist-item">
                <NavLink
                  exact
                  to="/Bim"
                  activeClassName="pagehero__navigationlink--active"
                  className="pagehero__navigationlink"
                >
                  {description}
                  <span className="pagehero__underline"></span>
                </NavLink>
              </li>
              <li className="pagehero__navigationlist-item">
                <NavLink
                  exact
                  to="/Entries"
                  activeClassName="pagehero__navigationlink--active"
                  className="pagehero__navigationlink"
                >
                  {entries}
                  <span className="pagehero__underline"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="pagehero__buttons">
          <Button
            className="pagehero__button"
            name="View Regulations"
          />
          <Button
          className="pagehero__button-second"
            name="Apply now"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
