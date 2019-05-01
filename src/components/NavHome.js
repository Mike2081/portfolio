import React, { Component } from 'react';
import '../styles/NavHome.scss';

export default class NavHome extends Component {
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset);
  }
  render() {
    return (
      <div className='back'>
        <div className='back__space'>
            <a className='back__space__buttons'>About</a>
            <a className='back__space__buttons'>Portfolio</a>
            <a className='back__space__buttons'>Contact</a>
        </div>
      </div>
    )
  }
}
