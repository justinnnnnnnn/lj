import React from 'react';
import { Link } from 'react-router-dom';
// import Chart from '../chart/chart'
import Stonk from '../chart/stonk'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }
  
  
  handleDemoSubmit(e) {
      // const processForm = 
      e.preventDefault();
      this.props.processForm();
  }

  render() {
  const { currentUser, logout } = this.props
    const sessionLinks = () => (

    <div>
       {/* <img src="https://media0.giphy.com/media/PgXcWhrL0gjQlAhHUY/giphy.gif"/> */}
      <div className="green-part">
        <div className="header">
          <Link to="/" className="header-link">
            <h3>🦍 Robinherd 🦍</h3>
          </Link>
          <nav className="login-signup">
            <ul>
              <li className="login-signup-button"><Link to="/login">Log In</Link></li>
              <li className="login-signup-button"><Link to="/signup">Sign Up</Link></li>
              <li><input type="submit" className="demo-button" onClick={(e) => this.handleDemoSubmit(e)} value="DEMO LOGIN"/></li>
            </ul>
          </nav>
        </div>

        <div className="green-for-real">
          
          <div className="green-left-box">
            <div className="green-left-col">
              <div className="slogan"><span>Investing for <br/>
              Errbody</span></div>
              <div className="value-prop"><h2>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stonk for free.  Probably something wack like HECLA.</h2></div>
              <div className="demo-button-deux">
                <input type="submit" className="demo-button-deux" onClick={(e) => this.handleDemoSubmit(e)} value="DEMO LOGIN"/>
              </div>
              <div className="icon-info">
                <span><svg fill="none" height="28" viewBox="0 0 24 24" width="28"><circle   cx="12" cy="12" r="11" stroke="rgb(0, 0, 0)" strokeWidth="2"></circle><path   d="M11.232 18H13.056V9.52H11.232V18ZM11.2 8.128H13.088V6.32H11.2V8.128Z"  fill="rgb(0, 0, 0)"></path></svg></span>
                <div className="icon-info-text">Commissions {'&'} Free Stonk Disclosures</div>
              </div>
            </div>
          </div>

          <div className="green-right">
            <video
              className="phone-vid" 
              autoPlay 
              controlsList="nodownload nofullscreen noremoteplayback" 
              loop
              muted
              playsInline
              preload="auto" 
              >
              
              {/* <source src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4"/> */}
              <source src="https://v.redd.it/99yeofbkzms61/DASH_1080.mp4?source=fallback" type="video/mp4"/>
            </video>

              <img className="phone-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png" srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__45f00d7b296cb52968f1bca4ef766fc1.png 3x"></img>
          </div>

        </div>
      </div>

      <div className="under-green">
        <h2>See our 💎 🙌 </h2>
      </div>

      <div className="errbody">
        <div className="superbowl">
          <video 
            autoPlay 
            controlsList="nodownload nofullscreen noremoteplayback" 
            loop
            muted
            playsInline
            preload="auto" 
            >
            <source src="https://v.redd.it/lu8aekujd6e61/DASH_720.mp4?source=fallback" type="video/mp4"/>
            {/* <source src="https://v.redd.it/8w0e23a5jze61/DASH_480.mp4?source=fallback" type="video/mp4"/> */}
            {/* <source src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4" type="video/mp4"/> */}
          </video>
        </div>
        <div className="superbowl-right">
          <div className="not-cats"><span>We are not cats.</span></div>
          <div className="not-cat-link">
            <span><Link to="/signup"><div className="apes-slogan">Apes strong together 🍌</div>
            {/* <div className="ape-icon"><svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M14 25.6667C20.4433 25.6667 25.6667 20.4434 25.6667 14C25.6667 7.55672 20.4433 2.33337 14 2.33337C7.55668 2.33337 2.33334 7.55672 2.33334 14C2.33334 20.4434 7.55668 25.6667 14 25.6667ZM13.1751 8.99168L17.0168 12.8334H7V15.1667H17.0168L13.1751 19.0084L14.825 20.6583L21.4833 14.0001L14.825 7.34176L13.1751 8.99168Z" fill="black" fillRule="evenodd"></path></svg></div> */}
            </Link></span>
          </div>
        </div>
      </div>

      <div className="wendy">
        <h1>Sir, this is a Wendy's</h1>
      </div>

    </div>
  );

  const personalGreeting = () => (
    <div> <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    {/* <Chart /> */}
    <Stonk/>
    </div>
  );
  
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks();
  }


};


export default Greeting;
