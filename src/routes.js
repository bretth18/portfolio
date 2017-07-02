import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';
import Stuff from './components/Stuff/Stuff';
import About from './components/About/About';

export default (

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="stuff" component={Stuff} />
      <Route path="about" component={About} />
      {/* <Route path="contact" component={Contact} /> */}
    </Route>
  </Router>
);
