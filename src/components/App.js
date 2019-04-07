import React, { Component } from 'react';
import '../styles/App.scss';
import SlideBox from './SlideBox.js';
import SideHome from './SideHome.js';
import About from './About.js';
import NavHome from './NavHome.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideBox/><SideHome/><NavHome/>
        <About/>
      </div>
    );
  }
}

export default App;
