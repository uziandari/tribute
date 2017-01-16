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
        </ul>
      </div>
    );
  }
}
