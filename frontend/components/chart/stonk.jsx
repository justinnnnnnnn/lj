import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import Chart from './chart'
import Loading from '../loading/loading'

class Stonk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      premarketData: {}, 
      intradayData: {},
      postmarketData: {}
    }
    this.preMarket = new Date().setHours(6, 0, 0, 0) / 1000
    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
    this.afterHours = new Date().setHours(15, 0, 0, 0) / 1000;
  }

  componentDidMount() {
    console.log('HEYYYYYYYYY!!!!!!!')
    StonkAPI.fetchStonkIntraday('GME', this.marketOpen, this.marketClose, window.finnhubAPIKey)
      .then((response) => this.setState({intradayData: response}))
      .then(() => this.setState({loading: false}))
    // StonkAPI.fetchStonkIntraday('GME', this.preMarket, this.marketOpen, window.finnhubAPIKey)
    //   .then((response) => this.setState({intradayData: response}))
    //   .then(() => this.setState({loading: false}))
    // StonkAPI.fetchStonkIntraday('GME', this.marketClose, this.afterHours, window.finnhubAPIKey)
    //   .then((response) => this.setState({intradayData: response}))
    //   .then(() => this.setState({loading: false}))
      
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {
    console.log(this.state.intradayData)
    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          <Chart intradayData={this.state.intradayData}/>
        </div>
      )
    }
  }  
}

export default Stonk;