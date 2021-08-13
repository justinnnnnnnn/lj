import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.stonkQuote,
      currentPrice: this.props.stonkQuote.c
    }
  }

  // componentDidMount() {
  //   StonkAPI.fetchStonkCurrentPrice("f", window.finnhubAPIKey).then(
  //     (response) => this.setState({price: response})).then(
  //       () => this.setState({loading: false})).then(
  //         () => this.setState({
  //     currentPrice: this.state.price.c
  //   }));
  //   console.log('mountymount:', this.state.price, this.state.currentPrice)
  // }
  render() {
    console.log('quotes:', this.state.price, this.state.currentPrice)
    let buy = () => {
      return (
        <div>
          {`Buy 69 shares for $${this.state.currentPrice + 1 }`}
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