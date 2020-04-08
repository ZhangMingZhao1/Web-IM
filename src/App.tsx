import React from 'react';
import MyRouter from 'router/router';
import TabBar from 'component/TabBar';
import left from 'static/icon/1.png';
import middle from 'static/icon/2.png';
import right from 'static/icon/3.png';
const tab = [
  {
    link: '/home',
    key: 'home',
    name: '首页',
    icon: left,
  },
  {
    link: '/search',
    key: 'search',
    name: '搜索',
    icon: middle,
  },
  {
    link: '/my',
    key: 'my',
    name: '我的',
    icon: right,
  },
];
function App() {
  return (
    <>
      <MyRouter />
      <TabBar tab={tab} />
    </>
  );
}
export default App;
