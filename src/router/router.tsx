import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import routeConfig from './config';
import { IRouter } from './types';
import Home from 'application/home';
function MyRouter() {
  const renderRoute = (routeConfig: IRouter[]) => {
    return routeConfig.map(item => {
      console.log(item);
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    });
  };
  // console.log(routeConfig);
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" push />} />
        {renderRoute(routeConfig)}
      </Switch>
    </Router>
  );
}

export default MyRouter;
