import classNames from "classnames";
import { useState } from "react";
import "./Tabs.css";

interface Props {
  firstTabContent?: React.ReactNode;
  secondTabContent?: React.ReactNode;
  onChange?: () => number;
  activeTabIndex?: number;
}

const Tabs = ({
  firstTabContent,
  secondTabContent,
  onChange,
  activeTabIndex,
}: Props) => {
  // const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

  return (
    <div className="c-tabs">
      <ul className="c-tabs__list">
        <li className="c-tabs__item">
          <button
            onClick={onChange}
            className={
              activeTabIndex === 1 ? "c-tabs__btn" : "c-tabs__btn--active"
            }
          >
            Tab 1
          </button>
        </li>

        <li>
          <button
            onClick={onChange}
            className={
              activeTabIndex === 2 ? "c-tabs__btn" : "c-tabs__btn--active"
            }
          >
            Tab 2
          </button>
        </li>
      </ul>
      <div className="c-tabs__content">
        <div
          className={
            activeTabIndex === 1 ? "c-tabs__tab" : "c-tabs__tab--active"
          }
        >
          {firstTabContent}
        </div>

        <div
          className={
            activeTabIndex === 2 ? "c-tabs__tab" : "c-tabs__tab--active"
          }
        >
          {secondTabContent}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
