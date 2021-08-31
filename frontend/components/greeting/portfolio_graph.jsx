import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import * as UserAPI from '../../util/user_api_util'
import Chart from './chart'
import Loading from '../loading/loading'

class PortfolioGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      intradayData: {},
      ownedStonks: []
    }

    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
  }

  componentDidMount() {
    UserAPI.getAllStockBuys(this.props.currentUser.id)
      .then((response) => {response; this.setState({ownedStonks: response})})
      .then(() => this.setState({loading: false}))

    StonkAPI.fetchStonkIntraday(this.props.stonk, this.marketOpen, this.marketClose, window.finnhubAPIKey)
    .then((response) => this.setState({intradayData: response}))
    .then(() => this.setState({loading: false}))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stonk !== this.props.stonk) {
      StonkAPI.fetchStonkIntraday(this.props.stonk, this.marketOpen, this.marketClose, window.finnhubAPIKey)
      .then((response) => this.setState({intradayData: response}))
      .then(() => this.setState({loading: false}))
    }
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {
    const thisStonk = this.props.stonk
    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          <Chart stonk={thisStonk} intradayData={this.state.intradayData}/>
        </div>
      )
    }
  }  
}

export default PortfolioGraph;