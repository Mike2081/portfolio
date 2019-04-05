import React, { Component } from 'react';
import '../styles/SlideBox.scss';

export default class SlideBox extends Component {
  componentDidMount(){
    window.addEventListener(this.headerOnScroll);
  }
  headerOnScroll() {
   header = e.target.id('sContainer');
    if(window.pageYOffset === 0) {
      header.classList.add('view');
  }else {
    header.classList.remove('view');
  }
  };
  render() {
    return (
      <div className='sContainer'>
        <div className='sContainer__home1'>
        Hi, I'm
        </div>
        <div className='sContainer__home2'>
        Michael DoHo
        </div>
        <div className='sContainer__home3'>
          I'm a front-end web developer.
        </div>  
      </div>
    )
  }
}
