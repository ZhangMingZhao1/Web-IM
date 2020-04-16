import React from 'react';
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

function App() {
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
