import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="link-item">
            <Link to="/about">About</Link>
          </li>
          <li className="link-item">
            <Link to="/timeline">Timeline</Link>
          </li>
          <li className="link-item">
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </div>
    );
  }
}