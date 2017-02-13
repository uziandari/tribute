import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="center-title">
            <h1></h1>
            <h3></h3>
            <Link to="/about"><button className="button"></button></Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
