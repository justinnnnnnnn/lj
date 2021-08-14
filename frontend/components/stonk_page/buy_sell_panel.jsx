import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.stonkQuote,
      currentPrice: this.props.stonkQuote.c,
      input: 0
    }
  }

  setInput = e => this.setState({input: Number(e.target.value)})
  
  render() {
    const stockPrice = this.state.currentPrice;
    console.log(stockPrice)
   


    console.log('quotes:', this.state.price, this.state.currentPrice);
    let buy = () => {
      return (
        <div>
          <form>
            Buy {this.props.stonk} <br/>
            Shares: <input type="number" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> <br/>
            Market Price {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}<br/>
            Estimated Cost {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}
          </form>
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