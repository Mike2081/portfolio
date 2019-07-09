import React, { Component } from 'react';
import '../styles/App.scss';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      typr: 'off1',
      stock:'off2',
      brain:'off3',
      band: 'off4',
      chefi:'off5',
      contact:'off6',
    }
  };

  onClick1 = (e) => {
    this.setState({typr:'on1'})
  };
  offClick1 = (e) => {
    this.setState({typr:'off1'})
  }
  onClick2 = (e) => {
    this.setState({stock:'on2'})
  };
  offClick2 = (e) => {
    this.setState({stock:'off2'})
  };
  onClick3 = (e) => {
    this.setState({brain:'on3'})
  };
  offClick3 = (e) => {
    this.setState({brain:'off3'})
  };
  onClick4 = (e) => {
    this.setState({band:'on4'})
  };
  offClick4 = (e) => {
    this.setState({band:'off4'})
  };
  onClick5 = (e) => {
    this.setState({chefi:'on5'})
  };
  offClick5 = (e) => {
    this.setState({chefi:'off5'})
  };
  onClick6 = (e) => {
    this.setState({contact:'on6'})
  };
  offClick6 = (e) => {
    this.setState({contact:'off6'})
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
                <button className='App__projects__case__chest__info1' onClick={this.onClick1}>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/stock.jpg')}/>
                <button className='App__projects__case__chest__info1' onClick={this.onClick2}>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/brain.jpg')}/>
                <button className='App__projects__case__chest__info1' onClick={this.onClick3}>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/band.jpg')}/>
                <button className='App__projects__case__chest__info1' onClick={this.onClick4}>Learn More</button>  
              </div>
              <div className='App__projects__case__chest'>
                <img className='App__projects__case__chest__demo1' src={require('../Images/chefi-hat.jpg')}/>
                <button className='App__projects__case__chest__info1' onClick={this.onClick5}>Learn More</button>  
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
            <div className={this.state.stock}>
              <div className='stockVidSection'>
                <button className='stockVidSection__offClick2' onClick={this.offClick2} >X</button>
                <video src={require('../videos/instock.mov')} className ='stockVidSection__stockDemo' controls loop></video>
              </div>
              <div className='SumSection'>
                <span className='SumSection__stockTitle'>InStock</span>
                <span className='SumSection__stockSum'>InStock is a warehouse site made with my BrainStation classmates Ana Provirina, Lukas Richardson, and Tyler Noseworthy. 
                This project was incredibly valuable. We used a Jira board, which taught me so much about dividing tasks among the group and communicating what needs to be done. 
                Also learned about merging and dealing with conflicts with other people's code. </span>
              </div>
            </div>
            <div className={this.state.brain}>
              <div className='brainVidSection'>
                <button className='brainVidSection__offClick3' onClick={this.offClick3} >X</button>
                <video src={require('../videos/brain.mov')} className ='brainVidSection__brainDemo' controls loop></video>
              </div>
              <div className='brainSumSec'>
                <span className='brainSumSec__brainTitle'>BrainFlix</span>
                <span className='brainSumSec__brainSum'>BrainFlix is a YouTube clone that I made with React JavaScript and node express server. Also with a working comment section that you can comment on videos you like.</span>
              </div>
            </div>
            <div className={this.state.band}>
              <div className='bandVidSection'>
                <button className='bandVidSection__offClick4' onClick={this.offClick4} >X</button>
                <video src={require('../videos/band.mov')} className ='bandVidSection__bandDemo' controls loop></video>
              </div>
              <div className='bandSumSec'>
                <span className='bandSumSec__bandTitle'>The Bee's Knees</span>
                <span className='bandSumSec__bandSum'>The Bee's knees band page that I made with Html5 and CSS. Also with a working comment section where you add your name and comment about the band.</span>
              </div>
            </div>
            <div className={this.state.chefi}>
              <div className='chefiSection'>
                <button className='chefiSection__offClick5' onClick={this.offClick5}>X</button>
                <img className='chefiSection__chefiDemo' src={require('../Images/chefi-hat.jpg')}/>
              </div>
              <div className='chefiSum'>
                <span className='chefiSum__chefiTitle'>Chefi</span>
                <span className='chefiSum__chefiSum'>The project I'm working on at the moment is called "Chefi". 
                Chefi is a website where you can look up dishes that you're craving. 
                Chefi will then give you a list of recipes for that dish. 
                Recipes include cook time and a ingredient list you can edit!</span>
              </div>
            </div>
            <div className={this.state.contact}>
              <div className='profileSec'>
                <button className='profileSec__offClick6' onClick={this.offClick6}>X</button>
                <img className='profileSec__face' src={require('../Images/part1.gif')} />
              </div>
              <div className='contactSec'>
                <span className ='contactSec__message'>You can reach me at any of my socials below</span>
                <div>
                  <img className = 'contactSec__eLogo' src={require('../Images/email.png')}/>
                  <span className='contactSec__email'>michaeldoho@hotmail.com</span>
                </div>
                <div>
                  <a href='https://github.com/Mike2081' target="_blank"><img className='contactSec__sLogo' src={require('../Images/git.png')}/></a>
                  <a href='https://www.linkedin.com/in/michaeldoho/' target="_blank"><img className='contactSec__sLogo' src={require('../Images/linkedin.png')}/></a>
                  <a href='https://www.instagram.com/doh0/' target="_blank"><img className='contactSec__sLogo' src={require('../Images/ig.png')}/></a>
                </div>
              </div>
            </div>
          </div>
        <div className='App__nav'>
            <div className='App__nav__box'>
              <button className='App__nav__box__switch'onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>Home</button>
              <button className='App__nav__box__switch' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
              <button className='App__nav__box__switch' onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})}>Projects</button>
              <button className='App__nav__box__switch' onClick={this.onClick6} >Contact</button> 
            </div>
            <div className='App__nav__line'></div>
        </div>  
      </div>
    );
  }
}

export default App;
