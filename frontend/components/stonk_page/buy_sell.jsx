import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import BuySellPanel from './buy_sell_panel';
import Loading from '../loading/loading'

class BuySell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      buySell: {},
      stonkQuote: {},
    }
  }

  componentDidMount() {
      StonkAPI.fetchStonkCurrentPrice(this.props.stonk, window.finnhubAPIKey)
      .then((response) => this.setState({stonkQuote: response}))
      .then(() => this.setState({loading: false}))
      // this.setState({loading: false}))
    
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
          {/* <BuySellPanel stonk={this.state.stonk}/> */}
          <BuySellPanel stonk={thisStonk} intradayData={this.state.stonkQuote}/>
        </div>
      )
    }
  }

};

export default BuySell;