import React, { Component } from 'react';

import Navigation from '../Navigation/index';
import './style.css'

export default class About extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <h2>From Wikipedia:</h2>
        <p>Words area</p>
      </div>
    );
  }
}
