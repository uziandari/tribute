import React, { Component } from 'react';

import Navigation from '../Navigation/index';
//import 'style.css';

export default class Timeline extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <h2>Timeline</h2>
        <ul>
          <li>timestuff</li>
          <li>2ndtimestuff</li>
          <li>3rdtimestuff</li>
          <li>4thtimestuff</li>
          <li>5thtimestuff</li>
          <li>6thtimestuff</li>
          <li>7thtimestuff</li>
          <li>8thtimestuff</li>
          <li>9thtimestuff</li>
          <li>10thtimestuff</li>
        </ul>
      </div>
    );
  }
}
