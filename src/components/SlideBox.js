import React, { Component } from 'react';
import '../styles/SlideBox.scss';

export default class SlideBox extends Component {
  componentDidMount(){
  let headerOnScroll = function() {
   let header = document.getElementsByClassName("sContainer");
    if(window.pageYOffset === 0) {
      header.classList.add('view');
      alert('top');
  }else {
    header.classList.remove('view');
  }
  };
}
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
