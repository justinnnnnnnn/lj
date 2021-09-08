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
      buy: true,
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
      .then((response) => {
        console.log("response to shares owned in mount:", response); 
        typeof response.shares === 'number' ?  this.setState({sharesOwned: response.shares}) : this.setState({sharesOwned: 0}) 
      })
    })
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if ((prevState.buyingPower !== this.state.buyingPower) || (prevState.sharesOwned !== this.state.sharesOwned)) {    
      UserAPI.getBuyingPower(this.props.currentUser.id)
      .then((response) => {this.setState({userData: response})})
      .then(() => this.setState({loading: false}))
      .then(() => this.setState({buyingPower: this.state.userData.buyingPower}))
      .then(() => {UserAPI.getStockBuy(this.props.stonk, this.props.currentUser.id)
        .then((response) => {console.log("response to shares owned in mount:", response); 
        typeof response.shares === 'number' ?  this.setState({sharesOwned: response.shares}) : this.setState({sharesOwned: 0}) 
        // this.setState({sharesOwned: response.shares})
        })
      })
    }
  }
  
  setInput(e) {
    this.setState({input: e.target.value})
  }


  buyOrCannot() {
    if ((Number(this.props.stonkQuote.c) * Number(this.state.input)) > Number(this.state.buyingPower)) {
      return (
      <div className="buy-error">Insufficient buying power</div>
    )
    } else {
      return (<button className="order-button">Complete Order</button>)
    }
  }
  sellOrCannot() {
    if (Number(this.state.input) > Number(this.state.sharesOwned)) {
      return (
      <div className="buy-error">Insufficient shares</div>
    )
    } else {
      return (<button className="order-button">Complete Order</button>)
    }
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
          console.log("SOLD SHARES");
          this.setState({sharesOwned: (Number(Number(this.state.sharesOwned) - Number(this.state.input)))})
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


    const stockPrice = this.props.stonkQuote.c;



    let buy = () => {
      if (this.state.buy) { //buy
        return (
          
          <div>
            <div className="buy-sell-div">
              <form onSubmit={this.submitBuy}>
                
                <span className="buy-sell-header">
                  <div className="h4-on-buy">
                    Buy {this.props.stonk}
                  </div>
                  <div className="h4-off" onClick={this.toggleBuySell}>
                    Sell {this.props.stonk}
                  </div>
                </span>
                
                <br/>
                <div className="buy-sell-item">
                  <div> 
                    Shares 
                  </div>
                  <div>
                    <input className="shares-input" type="number" min="0" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> 
                  </div>
                </div>

                <div className="buy-sell-item">
                  <div>
                    Market Price 
                  </div>
                  <div>
                    {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} 
                  </div>
                </div>

                <div className="buy-sell-item-cost">
                  <div> 
                    Estimated Cost 
                  </div>
                  <div>
                    {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}
                  </div>
                </div>
                <br/>
                {this.buyOrCannot()}
                {/* <button className="order-button">Complete Order</button> */}
              </form>
            </div>
            <br/>
            <div className="buy-buying-power">
              ${Number(this.state.buyingPower).toLocaleString('en-US',  {minimumFractionDigits: 2})} buying power available
            </div>
          </div>

        )
      } else { //sell
        return (

          <div>
            <div className="buy-sell-div">
              <form onSubmit={this.submitSell}>
                
                <span className="buy-sell-header">
                  <div className="h4-off" onClick={this.toggleBuySell}>
                    Buy {this.props.stonk}
                  </div>
                  <div className="h4-on-sell" >
                    Sell {this.props.stonk}
                  </div>
                </span>
                
                <br/>
                <div className="buy-sell-item">
                  <div> 
                    Shares 
                  </div>
                  <div>
                    <input className="shares-input" type="number" min="0" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> 
                  </div>
                </div>

                <div className="buy-sell-item">
                  <div>
                    Market Price 
                  </div>
                  <div>
                    {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} 
                  </div>
                </div>

                <div className="buy-sell-item-cost">
                  <div> 
                    Estimated Credit 
                  </div>
                  <div>
                    {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}
                  </div>
                </div>
                <br/>
                {this.sellOrCannot()}
                {/* <button className="order-button">Complete Order</button> */}
              </form>
            </div>
            <br/>
            <div className="buy-buying-power">
            {Number(this.state.sharesOwned)} shares available
            {/* {this.buyError()} */}
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