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
      <div className="App" ref={(section) => {this.Home = section}}>
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
        <div className='App__background'></div>
        <div className='App__about' ref={(section) => {this.About = section}}>
          <div className='App__about__square'>
            <div className='App__about__square__holder'>
              <img className='App__about__square__holder__face' src={require('../Images/part1.gif')}/>
              <h1 className='App__about__square__holder__description'>
                Hi! I'm a Front-End Developer based in Toronto. 
                I'm a recent graduate of BrainStation's Full Web Development
                program. Before the program, I was a carpenter who knew nothing about code, so I'm not afraid
                to adapt and rise up to the challenge of learning a new skill. I'm always trying to expand my programming 
                knowledge and critical thinking by working with others. Highly motivated programmer with a
                passion for bringing ideas to life with code. 
              </h1>
              <span className='App__about__square__holder__award'>-Received BrainStation Merit Scholarship</span>
            </div>
            <div className='App__about__square__icons'>
              <h1 className='App__about__square__icons__title'>Skills</h1>
              <div className='App__about__square__icons__block'>
                <div className='App__about__square__icons__block__html'>
                  <img className='App__about__square__icons__block__html__logo1' src={require('../Images/html5.png')}/>
                  <div className='App__about__square__icons__block__html__title1'>
                    HTML5
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
          <div className='App__nav'>
            <div className='App__nav__box'>
              <button className='App__nav__box__switch'onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>Home</button>
              <button className='App__nav__box__switch' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
              <button className='App__nav__box__switch'>Projects</button>
              <button className='App__nav__box__switch'>Contact</button>
            </div>
          <div className='App__nav__line'></div>
        </div>  
      </div>
    );
  }
}

export default App;
