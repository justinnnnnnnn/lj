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
    StonkAPI.fetchStonkCurrentPrice(this.props.stonk, window.finnhubAPIKey).then(
      (response) => this.setState({price: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      currentPrice: this.state.price.c
    }));
    console.log('mountymount:', this.state.price, this.state.currentPrice)
  }
  render() {
    console.log('quotes:', this.state.price, this.state.currentPrice)
    let buy = () => {
      return (
        <div>
          {`Buy 69 shares for $${this.state.currentPrice}`}
        </div>
      )
    }
    
    return (
      <div>
        <div>
          {buy()}
          
           {/* ${this.state.currentPrice} */}
        </div>
      </div>
    )
  }
}

export default BuySellPanel;