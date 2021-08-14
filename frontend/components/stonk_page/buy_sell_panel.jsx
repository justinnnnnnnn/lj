import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.stonkQuote,
      currentPrice: this.props.stonkQuote.c,
      input: 0,
      sharesOwned: 0,
      sharesValue: 0
    }

    // this.handleChange = this.handleChange.bind(this);
    this.submitBuy = this.submitBuy.bind(this);
    this.setInput = this.setInput.bind(this);


  }

  // handleChange(e) {
  //   this.setState({value: e.target.value});
  // }

  setInput(e) {
    this.setState({input: e.target.value})
  }
  
  submitBuy(e) {
    e.preventDefault();
    console.log("wtf is e?:", e.target.value)
    this.setState(
      {sharesOwned: (Number(this.state.sharesOwned) + Number(this.state.input))}
    )
    console.log("shares owned on submit:", this.state.sharesOwned)
  }

  render() {
    const stockPrice = this.state.currentPrice;
    console.log(stockPrice)


    console.log('quotes:', this.state.price, this.state.currentPrice);
    let buy = () => {
      return (
        <div>
          <div>
            <form onSubmit={this.submitBuy}>
              Buy {this.props.stonk} <br/>
              Shares: <input type="number" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> <br/>
              Market Price {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}<br/>
              Estimated Cost {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}
              <button>Clickity</button>
            </form>
          </div>
          <div>
            <br /><br />
            Shares Owned: {this.state.sharesOwned}
          </div>
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