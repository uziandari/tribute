import React, { Component } from 'react';

import Navigation from '../Navigation/index';
import Hero from '../Hero/index';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
      </div>
    );
  }
}

export default App;
