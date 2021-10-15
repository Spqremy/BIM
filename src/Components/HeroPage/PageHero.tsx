import React from "react";
import "./PageHero.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import Tabs from "./Tabs/Tabs";

export interface Props {
  title?: string;
  date?: string;
  description?:string;
  entries?:string;
}

const PageHero: React.FC<Props> = ({ title, date,entries,description }) => {
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
          {/* <Tabs firstTabContent="ccc" secondTabContent="aaa"/> */}
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
            name="View Regulations"
            backgroundColor="#152C5B"
            border="1px solid white"
            color="white"
            width="32%"
          />
          <Button
            name="Apply now"
            backgroundColor="#33C9D3"
            border="none"
            color="white"
            width="15%"
            marginLeft="5%"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
