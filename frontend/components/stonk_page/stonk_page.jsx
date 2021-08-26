import React from 'react';
import { Link } from 'react-router-dom';
import Graph from '../chart/graph'
import * as StonkAPI from '../../util/stonk_api_util'
import StonkNews from './stonk_news'
import StonkBio from './stonk_bio'
import SearchBar from '../search/search_bar'
import BuySell from './buy_sell'

class Stonk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stonkName: {},
      name: "STONK",
      // Real Backend Buying Power: {this.state.buyingPower}
    };
  }
  
  componentDidMount() {
    StonkAPI.fetchStonkBio(window.location.href.split("stonks/")[1], window.finnhubAPIKey)
    .then((response) => {
      console.log("hello", response)
      this.setState({stonkName: response})
    }).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      name: this.state.stonkName.name
    }));
    console.log("after mount", this.state)
  }
          
  componentDidUpdate(prevProps) {
    if (this.props.stonk !== prevProps.stonk) {
      StonkAPI.fetchStonkBio(window.location.href.split("stonks/")[1], window.finnhubAPIKey)
      .then((response) => {
        console.log("hello", response)
        this.setState({stonkName: response})
      }).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      name: this.state.stonkName.name
    }));
    }
  };

  
  render() {
    const thisStonk = window.location.href.split("stonks/")[1].toUpperCase()
    console.log("thisStonk var", thisStonk)
    const { currentUser, logout } = this.props
    return(

      <>
      <div className="whole-stonk-page">

        <div className="header-logged-in-stonk-page">
          <div className="account-header-stonk-page">
            <div className="robinherd-logo">
              
              🦧<br/>
            
            </div>
            
            <div className="search-bar">
              <div><SearchBar/></div>
            </div> 
            <div className="account-links">
              <div><span>Portfolio</span></div>
              <div><span>... Account</span></div>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
  
        
  
        <div className="stonk-div-logged-in">
          
          <div className="stonk-div-left">
            <div><h1>{this.state.stonkName.name}</h1></div> {/* MAKE THIS ANOTHER CHILD COMPONENT ROFLMAO */}
            
            <Graph stonk={thisStonk}/>
            
            <div className="buying-power">
                <div>
                  Box of Your Market Value (of this stock)
                </div>
                <div>
                  Box of Your Average Cost (of this stock)
                </div>
            </div>
            <div>
              <h1>About</h1>
            </div>
            <div>
              <StonkBio stonk={thisStonk}/>
            </div>

            <div className="news">
              <h1>News</h1>
            </div>
            <div>
              <StonkNews stonk={thisStonk}/>
            </div>
            <div>For more infortation, see our <a>Privacy Policy</a></div>
          </div>
          
          
          <div className="stonk-div-right">
            <div className="stonk-div-right-inner">
              <BuySell stonk={thisStonk} currentUser={this.props.currentUser}/>
            </div>
          </div>
        
        </div>
  
      </div>
      </>
    );
  };
    

};

export default Stonk;