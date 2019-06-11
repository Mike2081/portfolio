import React, { Component } from 'react';
import '../styles/App.scss';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      typr: 'off1',
    }
  };

  onClick1 = (e) => {
    this.setState({typr:'on1'})
  };

  offClick1 = (e) => {
    this.setState({typr:'off1'})
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
                knowledge and critical thinking by working with others. A highly motivated programmer with a
                passion for bringing ideas to life with code. 
              </h1>
              <h2 className='App__about__square__holder__award'>-Received BrainStation Merit Scholarship</h2>
            </div>
            <div className='App__about__square__icons'>
              <h1 className='App__about__square__icons__title'>Skills</h1>
              <div className='App__about__square__icons__block'>
                <div className='App__about__square__icons__block__html'>
                  <img className='App__about__square__icons__block__html__logo1' src={require('../Images/html5.png')}/>
                  <div className='App__about__square__icons__block__html__title1'>HTML5</div>
                </div>
                <div className='App__about__square__icons__block__css'>
                  <img className='App__about__square__icons__block__css__logo2' src={require('../Images/css3.png')}/>
                  <div className='App__about__square__icons__block__css__title2'>CSS3</div>
                </div>
                <div className='App__about__square__icons__block__sass'>
                  <img className='App__about__square__icons__block__sass__logo3' src={require('../Images/sass.png')}/>
                  <div className='App__about__square__icons__block__sass__title3'>SASS</div>
                </div>
                <div className='App__about__square__icons__block__js'>
                  <img className='App__about__square__icons__block__js__logo4' src={require('../Images/javascript.png')}/>
                  <div className='App__about__square__icons__block__js__title4'>Javascript</div>
                </div>
                <div className='App__about__square__icons__block__react'>
                  <img className='App__about__square__icons__block__react__logo5' src={require('../Images/React.png')}/>
                  <div className='App__about__square__icons__block__react__title5'>React</div>
                </div>
                <div className='App__about__square__icons__block__node'>
                  <img className='App__about__square__icons__block__node__logo6' src={require('../Images/nodejs.png')}/>
                  <div className='App__about__square__icons__block__node__title6'>Node</div>
                </div>
              </div>
              <div className='App__about__square__icons__block2'>
                <div className='App__about__square__icons__block2__wpack'>
                  <img className='App__about__square__icons__block2__wpack__logo7' src={require('../Images/webpack.png')}/>
                  <div className='App__about__square__icons__block2__wpack__title7'>Webpack</div>
                </div>
                <div className='App__about__square__icons__block2__post'>
                  <img className='App__about__square__icons__block2__post__logo12' src={require('../Images/postman.png')}/>
                  <div className='App__about__square__icons__block2__post__title12'>Postman</div>
                </div>
                <div className='App__about__square__icons__block2__jira'>
                  <img className='App__about__square__icons__block2__jira__logo9' src={require('../Images/jira.png')}/>
                  <div className='App__about__square__icons__block2__jira__title9'>Jira</div>
                </div>
                <div className='App__about__square__icons__block2__git'>
                  <img className='App__about__square__icons__block2__git__logo10' src={require('../Images/github.svg')}/>
                  <div className='App__about__square__icons__block2__git__title10'>Github</div>
                </div>
                <div className='App__about__square__icons__block2__vs'>
                  <img className='App__about__square__icons__block2__vs__logo11' src={require('../Images/visual.png')}/>
                  <div className='App__about__square__icons__block2__vs__title11'>Visual Studio Code</div>
                </div>
                <div className='App__about__square__icons__block2__npm'>
                  <img className='App__about__square__icons__block2__npm__logo8' src={require('../Images/npm.png')}/>
                  <div className='App__about__square__icons__block2__npm__title8'>NPM</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div className='App__spacer'ref={(section) => {this.Projects = section}}></div>
          <div className='App__projects'>
            <div className='App__projects__header'>Projects</div>
            <div className='App__projects__case'>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/typr.jpg')}/>
                <button className='App__projects__case__chest__info1' onClick={this.onClick1} >Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/stock.jpg')}/>
                <button className='App__projects__case__chest__info1'>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/brain.jpg')}/>
                <button className='App__projects__case__chest__info1'>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/band.jpg')}/>
                <button className='App__projects__case__chest__info1'>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/chefi-hat.jpg')}/>
                <button className='App__projects__case__chest__info1'>Learn More</button>  
              </div>
            </div>
            <div className={this.state.typr}>
              <div className='typrVidDiv'>
                <button className='typrSum__offClick1' onClick={this.offClick1} >X</button>
                <video src={require('../videos/Typr.mov')} className ='typrDemo1' controls loop></video>
              </div>
              <div className='typrSum'>
                <span className='typrSum__modalTitle'>Speed Typr</span>
                <span className='typrSum__TextA'>
                  Speed Typr is a game I made with React Javascript and node express server. Where random words fall down from the screen and you type as many words as you can before the time runs out.
                </span>
                <span className='typrSum__TextB'>
                  The words are being requested from an API, so you get a new set of words every time you start a new game.
                </span>
                {/* target="_blank" is needed so when you click the link it opens a newtab  */}
                <a className='typrSum__link1' href='https://speed-typr.herokuapp.com/#/start' target="_blank" >Try it yourself here!</a>
              </div>
            </div>
          </div>
        <div className='App__nav'>
            <div className='App__nav__box'>
              <button className='App__nav__box__switch'onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>Home</button>
              <button className='App__nav__box__switch' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
              <button className='App__nav__box__switch' onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})}>Projects</button>
              <button className='App__nav__box__switch'>Contact</button>
            </div>
            <div className='App__nav__line'></div>
        </div>  
      </div>
    );
  }
}

export default App;
