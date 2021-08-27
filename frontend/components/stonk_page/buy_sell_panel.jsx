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
      sharesValue: 0,
      userData: {},
      buyingPowerReal: this.props.currentUser.buyingPower,
    }

    // this.handleChange = this.handleChange.bind(this);
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
    }))
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
  //   this.setState(
  //     {sharesOwned: (Number(this.state.sharesOwned) + Number(this.state.input))}
  //   );
  //   // this.setState(
  //   //   {buyingPowerFake: (Number(this.state.buyingPowerFake) - Number(this.state.input * this.state.currentPrice))}
  //   // );
  //   this.setState(
  //     {buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))}
  //   );
  //   UserAPI.updateBuyingPower(this.state.buyingPowerReal, this.props.currentUser.id);
  //   console.log("what the back end should become", this.state.buyingPowerReal);
  // }

  // submitBuy(e) {
  //   e.preventDefault();
  //   this.setState(
  //     {buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))}
  //   )
  //   .then(() => UserAPI.updateBuyingPower(this.state.buyingPowerReal, this.props.currentUser.id))
  //   .then(() => console.log("what the back end should become", this.state.buyingPowerReal))
  // }
  submitBuy(e) {
    e.preventDefault();
    UserAPI.updateBuyingPower((Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice)), this.props.currentUser.id)
    .then(() => {
      this.setState({buyingPowerReal: (Number(this.state.buyingPowerReal) - Number(this.state.input * this.state.currentPrice))});
      console.log("what the back end should become", this.state.buyingPowerReal);
    })
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
          Shares Owned: {this.state.sharesOwned} <br/><br />
          {/* Buying Power: ${this.state.buyingPowerFake.toLocaleString('en-US',  {minimumFractionDigits: 2})}<br></br> */}
          Real Backend Buying Power: ${Number(this.state.buyingPowerReal).toLocaleString('en-US',  {minimumFractionDigits: 2})}
        </div>
      </div>
    )
  }
}

export default BuySellPanel;