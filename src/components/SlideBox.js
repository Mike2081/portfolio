import React, { Component } from 'react';
import '../styles/SlideBox.scss';
export default class SlideBox extends Component {
  render() {
    return (
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
    )
  }
}
