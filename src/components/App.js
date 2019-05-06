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
        <div className='container'>
        Hi, I'm 
          <div className='flip'>
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
          </div>
        A Front End Developer.
        </div>
        <div className='App__background'>
        
        </div>
      </div>
    );
  }
}

export default App;
