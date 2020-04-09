import React from 'react';
import MyRouter from 'appViewRouter/router';
import TabBar from 'component/TabBar';
import TopBar from 'component/TopBar';
import left from 'static/icon/1.png';
import middle from 'static/icon/2.png';
import right from 'static/icon/3.png';

const tab = [
  {
    link: '/app/home',
    key: 'home',
    name: '首页',
    icon: left,
  },
  {
    link: '/app/search',
    key: 'search',
    name: '搜索',
    icon: middle,
  },
  {
    link: '/app/my',
    key: 'my',
    name: '我的',
    icon: right,
  },
];
export default function appView() {
  return (
    <div>
      <TopBar data={{ name: 'Web-IM' }} />
      <div style={{ height: 60, width: '100%' }}></div>
      <MyRouter />
      <TabBar tab={tab} />
    </div>
  );
}
