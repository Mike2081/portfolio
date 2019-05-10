import React, { Component } from 'react';
import '../styles/App.scss';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(){
    super();
    this.state = {class: 'nav'}
  };
  componentDidMount(){
    window.addEventListener('scroll', (event) => {
       if(window.pageYOffset < 400) {
        this.setState({
          class: 'navChange'
       })
       }else{
        this.setState({
          class: 'nav'
    })
      }
    });
  }
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
          <img className='face' src={require('../Images/part1.gif')}/>
        </div>
          <div className={this.state.class}>
            <div className='box'>
              <button className='switch1'onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>Home</button>
              <button className='switch2' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
              <button className='switch3'>Projects</button>
              <button className='switch4'>Contact</button>
            </div>
          <div className='line'></div>
        </div>  
      </div>
    );
  }
}

export default App;
