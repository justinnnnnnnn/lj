import React from 'react';
import { Link } from 'react-router-dom';
import Graph from '../chart/graph'
import StonkNews from './stonk_news'

class Stonk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

    componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)
    
    // if (Object.keys(this.props.currentStonk).length === 0 || Object.keys(this.props.currentStonk === "None")) {
    //   this.props.fetchStonkInfo('GME')
    //   .then(() => this.props.fetchStonkData(this.props.match.params.symbol, this.state.fromDate, this.state.now))
    //   .then(() => this.props.fetchStonkNews('GME', '2021-05-01', '2021-06-01'))
    //   .then(() => this.props.fetchCurrentStonk(this.props.match.params.symbol))
    // }
    // if (Object.keys(this.props.currentStonk).length === 0 || Object.keys(this.props.currentStonk === "None")) {
    //   this.props.fetchStonkInfo(this.props.match.params.symbol)
    //   .then(() => this.props.fetchStonkData(this.props.match.params.symbol, this.state.fromDate, this.state.now))
    //   .then(() => this.props.fetchStonkNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))
    //   .then(() => this.props.fetchCurrentStonk(this.props.match.params.symbol))
    // }
  }
  
  
  
  render() {
    const { currentUser, logout } = this.props
    console.log("this.props")
    console.log(this.props)
    return(

      <>
      <h2>THIS IS THE STONK PAGE FOR REAL</h2>
      <div className="whole-stonk-page">

        <div className="header-logged-in-stonk-page">
          <div className="account-header-stonk-page">
            <div className="robinherd-logo">
            </div>
            {/* <div><SearchBar/></div> */}
            <div className="search-bar">
              search bar
            </div> 
            <div className="account-links">
              <div><span>Free Stonks</span></div>
              <div><span>Portfolio</span></div>
              <div><span>Cash</span></div>
              <div><span>Messages</span></div>
              <div><span>Account</span></div>The messages dot goes on the left side of this div
              <button className="header-button" onClick={logout}>Log Out</button> temporary
            </div>
          </div>
        </div>
  
        
  
        <div className="stonk-div-logged-in">
          
          stonk left
          <div className="stonk-div-left">
            <div>STONK NAME (GME ONLY PLZ)</div>
            <Graph/>
            
            <div className="buying-power">
                <div>
                  Buying Power
                </div>
                <div>
                  $Dynamic Money Amount
                </div>
            </div>
            <div className="trending-lists">
              <div>
                <div>Trending Lists</div>
                <div>Show More</div>
              </div>
              <ul><li>herpderp</li></ul>
            </div>
            
            <div className="news">
              <div className="news-header">
                News
              </div>
              <div className="top-news">
                Herp a derpa derp
              </div>
              <div className="daily-movers">
                [][][][]
              </div>
              <div className="more-news">
                [][][][]
              </div>
  
            </div>
  
            
  
            <div className="make it scroll for days">
              {/* <StonkNews symbol={this.props.match.params.symbol}/> */}
              <StonkNews/>
            {/* STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/>
            STONK <br/> */}
            </div>
            <div>For more infortation, see our <a>Privacy Policy</a></div>
          </div>
          
          
          stonk right
          <div className="stonk-div-right">
            <div className="stonk-div-right-inner">
              <div>Stocks (Header) ...</div>
              <div>Invest in GOLD FARTHINGS</div>
              <div className="lists">
                <div>Lists + (creatable)</div>
                <div>
                  <div>
                    <div>
                      <div>Emoji</div> 
                      <div>My First List</div> 
                      <div>arrow</div>
                    </div>
                    <div>
                      Stock list and divs
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>Emoji</div> 
                      <div>Cryptos to watch</div> 
                      <div>arrow</div>
                    </div>
                    <div>BY AND SAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
  
      </div>
      </>
    );
  };
    

};


export default Stonk;