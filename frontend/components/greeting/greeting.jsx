import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>

      <div className="green-part">
        <div className="header">
          <Link to="/" className="header-link">
            <h3>🦍 Robinherd 🦍</h3>
          </Link>
          <nav className="login-signup">
            <ul>
            <li className="login-button"><Link to="/login">Log In</Link></li>
              <Link to="/signup"><li className="signup-button">Sign Up</li></Link>
            </ul>
          </nav>
        </div>

        <div className="green-for-real">
          
          <div className="green-left">
            <div><h1>Investing for errbody!</h1></div>
            <div><h2>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Probably something wack like HECLA.</h2></div>
            <div><Link to="/signup"><span className="signup-button-deux"><h3>Sign Up</h3></span></Link></div>
            <div className="icon-info">
              <span><svg fill="none" height="28" viewBox="0 0 24 24" width="28"><circle cx="12" cy="12" r="11" stroke="rgb(0, 0, 0)" strokeWidth="2"></circle><path d="M11.232 18H13.056V9.52H11.232V18ZM11.2 8.128H13.088V6.32H11.2V8.128Z" fill="rgb(0, 0, 0)"></path></svg></span>
              <div className="icon-info-text">Commissions {'&'} Free Stonk Disclosures</div>
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
              <source src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4"/>
            </video>

              <img class="phone-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png" srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__45f00d7b296cb52968f1bca4ef766fc1.png 3x"></img>
          </div>

        </div>
      </div>

      <div>
        <video 
              autoPlay 
              controlsList="nodownload nofullscreen noremoteplayback" 
              loop
              muted
              playsInline
              preload="auto" 
            >
              <source src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4" type="video/mp4"/>
            </video>
      </div>

    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
