import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import StoreProvider from './context';
import AppView from 'application/appView';
// import ChatView from 'application/chatView';
import LoginView from 'application/loginView';
import ChatView from 'application/chatView';
import MessageStore from 'store/store';

function App() {
  const myMessageStore = React.useContext(MessageStore);
  // 因为类型“EventTarget”上不存在属性“className” 这里只好先any了
  const touchHandle = (e: any) => {
    console.log('touchHandle emit', e.target.className);
    const target = e.target;
    if (target) {
      if (!target.className) {
        return;
      }
    }
    if (
      e.target.className.indexOf('emoji') > -1 ||
      e.target.parentNode.className.indexOf('emoji') > -1
    ) {
      myMessageStore.setEmoji(true);
    } else {
      myMessageStore.setEmoji(false);
    }
  };
  const clickHandle = (e: any) => {
    console.log('clickHandle emit', e.target.className);
    if (
      e.target.className.indexOf('emoji') > -1 ||
      e.target.parentNode.className.indexOf('emoji') > -1
    ) {
      console.log('setEmoji(true)', myMessageStore.getEmoji);
      myMessageStore.setEmoji(true);
    } else {
      console.log('setEmoji(true)', myMessageStore.getEmoji);
      myMessageStore.setEmoji(false);
    }
  };
  useEffect(() => {
    document.addEventListener('touchstart', touchHandle);
    document.addEventListener('click', clickHandle);
    return () => {
      document.removeEventListener('touchstart', touchHandle);
      document.removeEventListener('click', clickHandle);
    };
  }, []);

  return (
    // <StoreProvider>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
        <Route path="/app" component={AppView} />
        <Route exact path="/login" component={LoginView} />
        <Route path="/chat" component={ChatView} />
      </Switch>
    </Router>
    // </StoreProvider>
  );
}
export default App;
