import React, { Component } from 'react';

import Navigation from '../Navigation/index';
import './style.css'

export default class About extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <h1>About</h1>
      </div>
    );
  }
}