import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppView from 'application/appView';
// import ChatView from 'application/chatView';
import LoginView from 'application/loginView';
import ChatView from 'application/chatView';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/home" push />}
          />
          <Route path="/app" component={AppView} />
          <Route exact path="/login" component={LoginView} />
          <Route path="/chatRoom" component={ChatView} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
