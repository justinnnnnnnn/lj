import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import * as UserAPI from '../../util/user_api_util'
import Loading from '../loading/loading'
import PortfolioGraphBuilder from './portfolio_graph_builder';

class PortfolioGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolioPrices: [],
      buyingPower: this.props.buyingPower,
      portfolio: this.props.portfolio, // array of objects, need .ticker and .shares
      intradayPortfolio: {},
      intradayPortfolio2: {},
      portfolioAPILength: 0,
    }

    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
  }

  componentDidMount() {
    Promise.all(
      this.props.portfolio.map((ele) => {
      StonkAPI.fetchStonkIntraday((ele.ticker), this.marketOpen, this.marketClose, window.finnhubAPIKey)
        .then((response) => {
          this.setState(prevState => (
            {portfolioPrices: [...prevState.portfolioPrices, response]}));
            // {portfolioPrices: response}));
        })
      }))
      .then(() => {
        this.setState({portfolioAPILength: this.state.portfolioPrices.length})
      }
    );
  };

  componentDidUpdate() {
    if ((this.state.portfolioPrices.length === this.state.portfolio.length) && this.state.loading === true) {
      this.setState({loading: false})
    }

  };


  

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {

    


    if (this.state.loading === true ) {
      return <Loading/>} else {   
          return (
            <div>

          <PortfolioGraphBuilder portfolioPrices={this.state.portfolioPrices} portfolio={this.state.portfolio} buyingPower={this.props.buyingPower}/>
        </div>
      )
    } 
    }
  }  


export default PortfolioGraph;
