import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
      currentPrice: 0
    }
    // this.currentPrice = this.currentPrice.bind(this);
  }

  componentDidMount() {
    StonkAPI.fetchStonkCurrentPrice('GME', window.finnhubAPIKey).then(
      (response) => this.setState({price: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      currentPrice: this.state.price.c
    }))
  }
  render() {
    let buy = () => {
      return (
        <div>
          {`Buy 69 shares for $${this.currentPrice}`}
        </div>
      )
    }
    
    return (
      <div>
        <div>
          {buy()}
        </div>
      </div>
    )
  }
}

export default BuySellPanel;