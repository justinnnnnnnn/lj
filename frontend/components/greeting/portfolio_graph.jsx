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
      intradayPortfolio: {},
      buyingPower: this.props.buyingPower,
      portfolio: "TSLA",
      // portfolio: this.props.portfolio,
    }

    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
  }

  componentDidMount() {




    StonkAPI.fetchStonkIntraday("TSLA", this.marketOpen, this.marketClose, window.finnhubAPIKey)
    .then((response) => this.setState({intradayPortfolio: response}))
    .then(() => this.setState({loading: false}))
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {
    if (this.state.loading) {
      return <Loading/>
    } else {
      {console.log("GRAPH PROPS", this.state.portfolio, this.state.intradayPortfolio)}       
      return (
        <div>
          <PortfolioGraphBuilder portfolio={this.state.portfolio} intradayPortfolio={this.state.intradayPortfolio}/>
        </div>
      )
    }
  }  
}

export default PortfolioGraph;











  // componentDidMount() {
  //   UserAPI.getAllStockBuys(this.props.currentUser.id)
  //     .then((response) => {response; this.setState({ownedStonks: response})})
  //     .then(() => this.setState({loading: false}))
  //     .then(() => {

  //     }

  //     )
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.stonk !== this.props.stonk) {
  //     StonkAPI.fetchStonkIntraday(this.props.stonk, this.marketOpen, this.marketClose, window.finnhubAPIKey)
  //     .then((response) => this.setState({intradayData: response}))
  //     .then(() => this.setState({loading: false}))
  //   }
  // }