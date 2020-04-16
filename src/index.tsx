import React from 'react';
import ReactDOM from 'react-dom';
import MessageStore from 'store/store';

import './index.less';

import App from './App';

ReactDOM.render(
  <App />,

  document.getElementById('root')
);

// const myMessageStore = React.useContext(MessageStore);

// // 因为类型“EventTarget”上不存在属性“className” 这里只好先any了
// document.addEventListener('touchstart', (e: any) => {
//   const target = e.target;
//   if (target) {
//     if (!target.className) {
//       return;
//     }
//   }
//   if (
//     e.target.className.indexOf('emoji') > -1 ||
//     e.target.parentNode.className.indexOf('emoji') > -1
//   ) {
//     myMessageStore.setEmoji(true);
//   } else {
//     myMessageStore.setEmoji(false);
//   }
// });

// document.addEventListener('click', (e: any) => {
//   if (
//     e.target.className.indexOf('emoji') > -1 ||
//     e.target.parentNode.className.indexOf('emoji') > -1
//   ) {
//     myMessageStore.setEmoji(true);
//   } else {
//     myMessageStore.setEmoji(false);
//   }
// });
