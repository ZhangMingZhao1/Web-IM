import React from 'react';

import './index.less';
interface ITabBarProps {
  tab: {
    link: string;
    key: string;
    name: string;
    icon?: any;
  }[];
}
function TabBar(props: ITabBarProps) {
  console.log(props.tab);
  return (
    <div className="myTab">
      {props.tab.map((tab, index) => {
        return (
          <div className="tabItem" key={tab.key}>
            <div className="tabIcon">
              <img src={tab.icon} alt="" />
            </div>
            <div className="tabName">{tab.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TabBar;
