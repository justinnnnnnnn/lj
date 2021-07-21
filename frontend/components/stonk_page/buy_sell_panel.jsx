import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: 0
    }

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
          {`Buy 69 shares for ${currentPrice * 69}`}
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