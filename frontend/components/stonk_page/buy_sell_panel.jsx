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
      buyingPowerReal: this.props.currentUser.buyingPower,
      // sharesValue: Number(this.state.sharesOwned) * Number(this.state.price),
    }

    this.submitBuy = this.submitBuy.bind(this);
    this.setInput = this.setInput.bind(this);


  }

  componentDidMount() {
    UserAPI.getBuyingPower(this.props.currentUser.id)
    .then((response) => {
      console.log("mount that compy buysell", response)
      this.setState({userData: response})
    }).then(() => this.setState({loading: false})).then(
      () => this.setState({
      buyingPowerReal: this.state.userData.buyingPower
    }));
    // UserAPI.getStockBuy(this.props.currentUser)
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.buyingPowerReal !== this.state.buyingPowerReal) {    
      UserAPI.getBuyingPower(this.props.currentUser.id)
      .then((response) => {
        console.log("mount that compy buysell", response)
        this.setState({userData: response})
      }).then(() => this.setState({loading: false})).then(
        () => this.setState({
        buyingPowerReal: this.state.userData.buyingPower
      }))
    }
  }

  
  setInput(e) {
    this.setState({input: e.target.value})
  }

  // submitBuy(e) {
  //   e.preventDefault();
  //   UserAPI.updateBuyingPower((Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
  //   .then(() => {
  //     this.setState({buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))});
  //     console.log("what the back end should become aka account balance submission", this.state.buyingPowerReal);
  //   });
  //   if (this.state.sharesOwned <= 0) {
  //     UserAPI.stockBuy(this.props.stonk, this.state.input, this.props.currentUser.id)
  //     .then(() => {
  //       this.setState({sharesOwned: this.state.input})
  //     })
  //   } else {
  //     UserAPI.updateStockBuy(this.props.stonk, this.state.input, this.props.currentUser.id)
  //     .then(() => {
  //       this.setState({sharesOwned: this.state.input});
  //       console.log("does the portfolio submission happen??")
  //     })
  //   }
  // }
  submitBuy(e) {
    console.log("SUBMIT BUY: this.props.stonk, this.state.input, this.props.currentUser.id", this.props.stonk, this.state.input, this.props.currentUser.id)
    e.preventDefault();
    if (this.state.sharesOwned === 0 ) {
      UserAPI.updateBuyingPower((Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
      .then(() => {
        this.setState({buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))});
        console.log("account balance submission with new stock aka a", this.state.buyingPowerReal);
      })
      .then(() => {
        UserAPI.stockBuy(this.props.stonk, this.state.input, this.props.currentUser.id)
          .then(() => {
          this.setState({sharesOwned: this.state.input})
          console.log("does the portfolio submission happen path a??")
        })
      })
    } else {
      UserAPI.updateBuyingPower((Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
      .then(() => {
        this.setState({buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))});
        console.log("account balance submission with old stock aka b", this.state.buyingPowerReal);
      })
      .then(() => {
        UserAPI.updateStockBuy(this.props.stonk, this.state.input, this.props.currentUser.id)
        .then(() => {
          this.setState({sharesOwned: this.state.input});
          console.log("does the portfolio submission happen path b??")
        })
      })
    }
  }
      
  
  render() {
    console.log("second buysell component props", this.props);
    console.log("second buysell component state", this.state);
    const stockPrice = this.props.stonkQuote.c;
    console.log(stockPrice)


    let buy = () => {
      return (
        <div>
          <div>
            <form onSubmit={this.submitBuy}>
              Buy {this.props.stonk} <br/>
              Shares: <input type="number" name="input" value={this.state.input} onChange={this.setInput} placeholder={0} /> <br/>
              Market Price {`$${stockPrice.toLocaleString('en-US',  {minimumFractionDigits: 2}) }`}<br/>
              Estimated Cost {`$${(stockPrice * this.state.input).toLocaleString('en-US',  {minimumFractionDigits: 2}) }`} <br/>
              <button>Clickity</button>
            </form>
          </div>
          <div>
            <br /><br />
          </div>
        </div>
      )
    }
    
    return (
      <div>
        <div>
          {buy()}
          Shares Owned: {Number(this.state.sharesOwned)} <br/><br/>
          {/* Buying Power: ${this.state.buyingPowerFake.toLocaleString('en-US',  {minimumFractionDigits: 2})}<br></br> */}
          Buying Power: ${Number(this.state.buyingPowerReal).toLocaleString('en-US',  {minimumFractionDigits: 2})}
        </div>
      </div>
    )
  }
}

export default BuySellPanel;