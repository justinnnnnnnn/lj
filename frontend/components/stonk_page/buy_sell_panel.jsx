import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import * as UserAPI from '../../util/user_api_util'


class BuySellPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.stonkQuote,
      currentPrice: this.props.stonkQuote.c,
      input: 0,
      sharesOwned: 0,
      userData: {},
      buyingPower: this.props.currentUser.buyingPower,
      buy: true
      // sharesValue: Number(this.state.sharesOwned) * Number(this.state.price),
    }

    this.submitBuy = this.submitBuy.bind(this);
    this.submitSell = this.submitSell.bind(this);
    this.setInput = this.setInput.bind(this);
    this.toggleBuySell = this.toggleBuySell.bind(this);

  }

  componentDidMount() {
    UserAPI.getBuyingPower(this.props.currentUser.id)
    .then((response) => {this.setState({userData: response})})
    .then(() => this.setState({loading: false}))
    .then(() => this.setState({buyingPower: this.state.userData.buyingPower}))
    .then(() => {UserAPI.getStockBuy(this.props.stonk, this.props.currentUser.id)
      .then((response) => {console.log("response to shares owned in mount:", response); this.setState({sharesOwned: response.shares})})
    })
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.buyingPower !== this.state.buyingPower) {    
      UserAPI.getBuyingPower(this.props.currentUser.id)
      .then((response) => {this.setState({userData: response})})
      .then(() => this.setState({loading: false}))
      .then(() => this.setState({buyingPower: this.state.userData.buyingPower}))
      .then(() => {UserAPI.getStockBuy(this.props.stonk, this.props.currentUser.id)
        .then((response) => {console.log("response to shares owned in mount:", response); this.setState({sharesOwned: response.shares})})
      })
    }
  }
  
  setInput(e) {
    this.setState({input: e.target.value})
  }

  submitBuy(e) {
    console.log("BUYING HAS BEEN CLICKED")
    e.preventDefault();
    if (this.state.sharesOwned === 0 ) {
      UserAPI.updateBuyingPower((Number(this.state.buyingPower) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
      .then(() => {
        this.setState({buyingPower: (Number(this.state.buyingPower) - Number(this.state.input * this.state.currentPrice))});
      })
      .then(() => {
        UserAPI.stockBuy(this.props.stonk, this.state.input, this.props.currentUser.id)
          .then(() => {
            this.setState({sharesOwned: this.state.input})
        })
      })
    } else {
      UserAPI.updateBuyingPower((Number(this.state.buyingPower) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
      .then(() => {
        this.setState({buyingPower: (Number(this.state.buyingPower) - Number(this.state.input * this.state.currentPrice))});
      })
      .then(() => {
        UserAPI.updateStockBuy(this.props.stonk, (Number(Number(this.state.sharesOwned) + Number(this.state.input))), this.props.currentUser.id)
      })
    }
  }

  submitSell(e) {
    e.preventDefault();
    if (this.state.sharesOwned === 0 ) {
      return null 
    } else {
      UserAPI.updateBuyingPower((Number(this.state.buyingPower) + Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
      .then(() => {
        this.setState({buyingPower: (Number(this.state.buyingPower) + Number(this.state.input * this.state.currentPrice))});
      })
      .then(() => {
        UserAPI.updateStockBuy(this.props.stonk, (Number(Number(this.state.sharesOwned) - Number(this.state.input))), this.props.currentUser.id)
        .then(() => {
          console.log("SOLD SHARES")
        })
      })
    }
  }

  toggleBuySell() {
    if (this.state.buy) {
      this.setState({ buy: false})
    } else {
      this.setState({ buy: true})
    }
  }


  render() {
    // console.log("BuySell this.props.stonk:", this.props.stonk);

    const stockPrice = this.props.stonkQuote.c;



    let buy = () => {
      if (this.state.buy) { //buy
        return (
          
          <div>
            <div>
              <form onSubmit={this.submitBuy}>
                <div><span>Buy {this.props.stonk} </span> <span onClick={this.toggleBuySell}>Sell {this.props.stonk} </span></div>
                <br/>
                <div> Shares: <input type="number" min="0" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> </div>
                <br/>
                <div>Market Price {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} </div>
                <br/>
                <div> Estimated Cost {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} </div>
                <br/>
                <button>Complete Order</button>
              </form>
            </div>
            <br/>
            <div>
              ${Number(this.state.buyingPower).toLocaleString('en-US',  {minimumFractionDigits: 2})} buying power available
            </div>
          </div>

        )
      } else { //sell
        return (
          
          <div>
            <div>
              <form onSubmit={this.submitSell}>
                <div><span onClick={this.toggleBuySell}>Buy {this.props.stonk} </span> <span>Sell {this.props.stonk} </span></div>
                <br/>
                <div> Shares: <input type="number" min="0" max={this.state.sharesOwned} name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> </div>
                <br/>
                <div> Market Price {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} </div>
                <br/>
                <div> Estimated Credit {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} </div>
                <br/> 
                <div> <button>Complete Order</button> </div>
              </form>
            </div>
            <br/>
            <div>
            {Number(this.state.sharesOwned)} shares available
            </div>
          </div>

        )
      }
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