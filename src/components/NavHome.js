import React, { Component } from 'react';
import '../styles/NavHome.scss';
import About from './About.js';
import scrollToComponent from 'react-scroll-to-component';

export default class NavHome extends Component {
  constructor(){
    super();
    this.state = {}
  };
  
  render() {
    return (
      <div className='back'>
        <div className='back__space'>
          <button className='back__space__buttons' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
          <a className='back__space__buttons'>Portfolio</a>
          <a className='back__space__buttons'>Contact</a>
        </div>
      </div>
      
    )
  }
}
