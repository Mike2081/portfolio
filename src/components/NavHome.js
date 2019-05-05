import React, { Component } from 'react';
import '../styles/NavHome.scss';

export default class NavHome extends Component {
  constructor(){
    super();
  this.refs = {}
  }
  scrollTo(name) {
    this.refs[name].scrollIntoView();
  }
  render() {
    return (
      <div className='back'>
        <div className='back__space'>
            <button className='back__space__buttons' onClick={() => {this.scrollTo('About')}}>About</button>
            <a className='back__space__buttons'>Portfolio</a>
            <a className='back__space__buttons'>Contact</a>
        </div>
      </div>
    )
  }
}
