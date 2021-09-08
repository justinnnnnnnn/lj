import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown'
import OwnedStonks from './owned_stonks'
import MarketNews from './market_news'
import * as UserAPI from '../../util/user_api_util'
import PortfolioGraph from './portfolio_graph';
import SearchBar from '../search/search_bar'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      portfolio: [],
    };
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }
  componentDidMount() {
    this.props.currentUser ? UserAPI.getAllStockBuys(this.props.currentUser.id).then((response) => {response; this.setState({portfolio: response})}) 
    : null;
    console.log("MAIN SCREEN TURN ON")
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.currentUser ? UserAPI.getAllStockBuys(this.props.currentUser.id).then((response) => {response; this.setState({portfolio: response})}) 
    : null;
    console.log("MAIN SCREEN TURN ON")
  }

  
  handleDemoSubmit(e) {
      e.preventDefault();
      this.props.processForm();
  }

  printTendies() {
    let i = 0;
    for (i = 0; i < 200; i++) {
      <span> "stonk" i </span>;
    }
  }

  graphOrNot() {
    if (this.props.currentUser.stockBuys.length > 0) {
      return <PortfolioGraph buyingPower={this.props.currentUser.buyingPower} portfolio={this.props.currentUser.stockBuys}/>
    } else {
      return null
    }
  }

  render() {
    const { currentUser, logout } = this.props
    const sessionLinks = () => (

    <div>
      <div className="green-part">
        <div className="header">
          {/* <Link to="/" className="header-link"> */}
            <h1>🦍 Robinherd 🦍</h1>
          {/* </Link> */}
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
            {/* <source src="https://v.redd.it/lu8aekujd6e61/DASH_720.mp4?source=fallback" type="video/mp4"/> */}
            <source src="https://v.redd.it/wanpkctqcyx61/DASH_1080.mp4" type="video/mp4"/>

          </video>
        </div>
        <div className="superbowl-right">
          <div className="not-cats"><span>We are not cats.</span></div>
          <div className="not-cat-link">
            <span><Link to="/signup"><div className="apes-slogan">Apes strong together 🍌</div>
            </Link></span>
          </div>
        </div>
      </div>

      <div className="wendy">
      <marquee behavior="" direction="">
        <br />
        <div><img src="https://robinhood.com/us/en/_next/static/images/balloon__ef7d8a9bb1c7845fcb7a6799c35d513e.svg"/></div>
        <div><h1>Sir, this is a Wendy's</h1></div>
        {/* <div><img src="https://robinhood.com/us/en/_next/static/images/2x__50ed5a2a8854d545e03d193192de26de.png"/></div> */}
        </marquee>
        
      </div>

    </div>
  );

  const loggedInHeader = () => (
    <>
    <div className="whole-page-logged-in">
      <div className="header-logged-in">
        <div className="account-header">
          <div className="header-link-not-link">
            <h3>🦍 Robinherd 🦍</h3>
          </div>
          <SearchBar/>
          <div className="search-bar-adjunction"></div>
          <div className="account-links">
            <Link className="logout-button" onClick={logout}>Log Out</Link>
          </div>
        </div>
      </div>
      {/* {console.log("props stock buys", this.props.currentUser.stockBuys)} */}
      

      <div className="main-div-logged-in">
        
        <div className="main-div-left">
        {/* main left XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX GRAPH */}
          {/* <PortfolioGraph buyingPower={this.props.currentUser.buyingPower} portfolio={this.props.currentUser.stockBuys}/>  */}
          {/* <marquee>This will be a portfolio graph</marquee>           */}
          {/* {this.graphOrNot()} */}
          <div className="buying-power">
              <div>
                Buying Power
              </div>
              <div>
                ${ Number(this.props.currentUser.buyingPower).toLocaleString('en-US',  {minimumFractionDigits: 2}) }
              </div>
          </div>
          <div className="trending-lists">
            <div>
              {/* <div>Trending Lists</div> */}
              {/* <div>Show More</div> */}
            </div>
            {/* <ul><li>herpderp</li></ul> */}
          </div>
          
          <div className="news">
            <div className="news-header">
              News
            </div>
            <div className="top-news">
              {/* Top news article zero */}
              <MarketNews/>
            </div>

          </div>

      
          <div>For more information, see our <a>Privacy Policy</a></div>
        </div>
        
        
        {/* main right */}
        <div className="main-div-right">
          <div className="main-div-right-inner">
            <div className="stonks-shares"><div><h3>Stonks</h3></div><div><h4>Shares</h4></div></div>
            {/* <div>Stockname/shares, graph, price/change</div> */}
            <div className="lists">
              {/* <div>Lists + (creatable)</div> */}
              <div>
                <div>
                  <div>
                  </div>
                  <div>
                    {/* Stock list and divs */}
                    <OwnedStonks currentUser={currentUser}/>
                  </div>
                </div>
                <div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


    </div>
    </>
  );
  
  return currentUser ? loggedInHeader() : sessionLinks();
  }


};


export default Greeting; // to greeting container