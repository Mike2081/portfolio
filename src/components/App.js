import React, { Component } from 'react';
import '../styles/App.scss';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  };
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
        <div className='App__back'>
          <div className='App__back__space'>
            <button className='App__back__space__buttons' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
            <button className='App__back__space__buttons'>Projects</button>
            <button className='App__back__space__buttons'>Contact</button>
          </div>
        </div>
        <div className='App__about' ref={(section) => {this.About = section}}>
        
        </div>
      </div>
    );
  }
}

export default App;
