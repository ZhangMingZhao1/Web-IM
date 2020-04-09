import React, { useState } from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';
import './index.less';
interface ITabBarProps {
  tab: {
    link: string;
    key: string;
    name: string;
    icon?: any;
  }[];
  // history: any;
}
function TabBar(props: ITabBarProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const changeActive = (index: number) => {
    // console.log('changeActive', e.target.index);
    setActiveIndex(index);
  };

  return (
    <div className="myTab">
      {props.tab.map((tab, index) => {
        return (
          <Router key={tab.key}>
            <Link to={tab.link}>
              <div
                className={`tabItem ${index === activeIndex ? 'active' : ''}`}
                onClick={() => changeActive(index)}
              >
                <div className="tabIcon">
                  <img src={tab.icon} alt="" />
                </div>
                <div className="tabName">{tab.name}</div>
              </div>
            </Link>
          </Router>
        );
      })}
    </div>
  );
}

export default TabBar;
