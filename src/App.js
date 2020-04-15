import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from './views/Home';
import Landing from './views/Landing';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/app" to="/app/users" />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
