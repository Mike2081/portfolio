import React, { Component } from 'react';
import '../styles/SlideBox.scss';

export default class SlideBox extends Component {
  constructor() {
    super();
    this.state = {class: "sContainer"};
};
componentDidMount(){
  window.addEventListener('scroll', (event) => {
     if(window.pageYOffset < 100) {
      this.setState({
        class: 'sContainer-view'
     })
     }else{
      this.setState({
        class: 'sContainer'
  })
    }
  });
}

  render() {
    return (
      <div className = {this.state.class}>
        <div className='home1'>
        Hi, I'm
        </div>
        <div className='home2'>
        Michael DoHo
        </div>
        <div className='home3'>
          I'm a front-end web developer.
        </div>  
      </div>
    )
  }
}
