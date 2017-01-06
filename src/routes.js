// routes using react-router

import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Timeline from './components/Timeline';
import Works from './components/Works';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/timeline" component={Timeline} />
    <Route path="/works" component={Works} />
    <Route path="/*" component={NotFound} />
  </Router>
);

export default Routes;