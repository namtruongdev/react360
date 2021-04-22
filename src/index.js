import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('content')
);
