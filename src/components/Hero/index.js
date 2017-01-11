import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="center-title">
            <h1>Title</h1>
            <h3>A longer subtitle but still important</h3>
            <Link to="/about"><button className="button">About</button></Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
