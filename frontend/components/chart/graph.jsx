import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import Chart from './chart'
import Loading from '../loading/loading'

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      intradayData: {},
    }

    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
  }

  componentDidMount() {
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

export default Graph;







// constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       // premarketData: {}, 
//       intradayData: {},
//       // postmarketData: {}
//     }
//     // this.preMarket = new Date().setHours(6, 0, 0, 0) / 1000
//     this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
//     this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
//     // this.afterHours = new Date().setHours(15, 0, 0, 0) / 1000;
//   }



//  componentDidMount() {
//     // StonkAPI.fetchStonkIntraday('GME', this.marketOpen, this.marketClose, window.finnhubAPIKey)
//     // .then((response) => this.setState({intradayData: response}))
//     // .then((response) => dispatch.updateStonk('GME', response))
//     // .then(() => this.setState({loading: false}))
//     StonkAPI.fetchStonkIntraday('GME', this.marketOpen, this.marketClose, window.finnhubAPIKey)
//     .then((response) => this.setState({intradayData: response})).then(() => this.setState({loading: false}))
//     // .then((response) => dispatch.updateStonk('GME', response))
//     // .then(() => this.setState({loading: false}))
//     // console.log('HEYYYYYYYYY!!!!!!!')
//     // StonkAPI.fetchStonkIntraday('GME', this.preMarket, this.marketOpen, window.finnhubAPIKey)
//     //   .then((response) => this.setState({intradayData: response}))
//     //   .then(() => this.setState({loading: false}))
//     // StonkAPI.fetchStonkIntraday('GME', this.marketClose, this.afterHours, window.finnhubAPIKey)
//     //   .then((response) => this.setState({intradayData: response}))
//     //   .then(() => this.setState({loading: false}))
      
//   }