import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import BuySellPanel from '././buy_sell_panel';
import Loading from '../loading/loading'

class BuySell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      buySell: {},
    }
  }

  componentDidMount() {
      StonkAPI.fetchStonkCurrentPrice('GME', window.finnhubAPIKey)
      .then((response) => this.setState({stonk: response}))
      .then(() => this.setState({loading: false}))
    
    }
  
  componentWillUnmount() {
    this.setState({loading: true})
  }
  
  render() {

    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          {/* <BuySellPanel stonk={this.state.stonk}/> */}
          <BuySellPanel/>
        </div>
      )
    }
  }

};

export default BuySell;