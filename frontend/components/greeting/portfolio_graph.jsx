import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import * as UserAPI from '../../util/user_api_util'
import Loading from '../loading/loading'
import PortfolioGraphBuilder from './portfolio_graph_builder';

class PortfolioGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolioPrices: [],
      buyingPower: this.props.buyingPower,
      portfolioz: ["TSLA", "GME"],
      portfolio: this.props.portfolio, // array of objects, need .ticker and .shares
      intradayPortfolio: {},
      intradayPortfolio2: {},
      portfolioAPILength: 0,
    }

    this.marketOpen = new Date().setHours(6, 30, 0, 0) / 1000;
    this.marketClose = new Date().setHours(13, 0, 0, 0) / 1000;
  }

  componentDidMount() {
    Promise.all(
      this.props.portfolio.map((ele) => {
      StonkAPI.fetchStonkIntraday((ele.ticker), this.marketOpen, this.marketClose, window.finnhubAPIKey)
        .then((response) => {
          this.setState(prevState => (
            {portfolioPrices: [...prevState.portfolioPrices, response]}));
        })
      }))
      .then(() => {
        this.setState({portfolioAPILength: this.state.portfolioPrices.length})
      }
    );
  };

  componentDidUpdate() {
    if ((this.state.portfolioPrices.length === this.state.portfolio.length) && this.state.loading === true) {
      this.setState({loading: false})
    }
    // .then(() => this.setState({loading: false}))
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.portfolioPrices !== undefined)
  // }

  

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {
    console.log("is loading?", this.state.loading)
    const sharesTimesPrices = () => {
      console.log("lmno this.state.portfolioPrices", this.state.portfolioPrices[0]);
      // this.state.portfolioPrices.forEach((element, index) => {
      //   this.state.portfolioPrices[i][index] = element * portfolio[i].shares
      // });
      // console.log("portfolio prices.o", this.state.portfolioPrices);
      // for(let i = 1; i < this.state.portfolioPrices.length; i++)
      //   for(let j = 0; j < this.state.portfolioPrices[0].o.length; j++)
      //   this.state.portfolioPrices[0].o[j] += this.state.portfolioPrices[i][j];
      // console.log("portfolio prices[0]", this.state.portfolioPrices[0]);
    }
    


    if (this.state.loading === true ) {
      // if (!this.state.portfolioPrices) {
      return <Loading/>} else {

        // } else {
          // {console.log("GRAPH PROPS", this.state.intradayPortfolio)}       
          return (
            <div>
          {sharesTimesPrices()}
          <PortfolioGraphBuilder portfolioPrices={this.state.portfolioPrices} portfolio={this.state.portfolio} buyingPower={this.props.buyingPower}/>
        </div>
      )
    } 
    }
  }  


export default PortfolioGraph;
// componentDidMount() { works but hella doesnt
//   Promise.all(
//     this.props.portfolio.map((ele, i) => {
//     StonkAPI.fetchStonkIntraday((ele.ticker), this.marketOpen, this.marketClose, window.finnhubAPIKey)
//       .then((response) => {
//         this.setState({intradayPortfolio: response});
//         this.state.portfolioPrices.push(this.state.intradayPortfolio);
//         console.log("PORTFOOLIUS", this.state.portfolioPrices, this.state.portfolioPrices.length, "And the props?:", this.state.portfolio, this.state.portfolio.length);
//       })
//     }))
//     .then(() => {
//       this.setState({portfolioAPILength: this.state.portfolioPrices.length})
//     }
//     );
//   console.log("getting desperate", this.state.portfolioAPILength)
//   // )
//     // .then(() => this.setState({loading: false}))
//   };

  // componentDidMount() { HALFWAY POINT IS BROKEN
  //   this.props.portfolio.map((ele, i) => {
  //     StonkAPI.fetchStonkIntraday((ele.ticker), this.marketOpen, this.marketClose, window.finnhubAPIKey)
  //       .then((response) => {this.state.portfolioPrices.push(response);
  //       console.log(this.state.portfolioPrices)}
  //   )});
  //   // .then(() =>
  //   this.state.portfolioPrices[i].forEach((element, index) => {
  //     this.state.portfolioPrices[i][index] = element * portfolio[i].shares
  //     })
  //   // )
  //   // .then(() => {
  //   console.log("portfolio prices", this.state.portfolioPrices)
  //   for(let i = 1; i < this.state.portfolioPrices.length; i++)
  //     for(let j = 0; j < this.state.portfolioPrices[0].length; j++)
  //     this.state.portfolioPrices[0][j] += this.state.portfolioPrices[i][j];
  //   // })
  // };
        
    // console.log(this.state.portfolioPrices[0])



    // StonkAPI.fetchStonkIntraday("TSLA", this.marketOpen, this.marketClose, window.finnhubAPIKey)
    // .then((response) => this.setState({intradayPortfolio: response}))
    // .then(()=> StonkAPI.fetchStonkIntraday("GME", this.marketOpen, this.marketClose, window.finnhubAPIKey))
    //   .then((response) => this.setState({intradayPortfolio2: response}))
    // .then(() => {
    //   console.log("pooooooooop", this.props, this.state.intradayPortfolio.o)
    //   //for loop
    //   this.state.intradayPortfolio.o.forEach(element => {
    //     this.state.portfolioPrices.push(element);
    //     console.log("WEATHER THE ELEMENT:", this.state.portfolioPrices, element)
    //   })}
    //   )
    //   .then(() => {
    //     for (let i = 0; i < this.state.portfolioPrices.length; i++) {
    //       this.state.portfolioPrices[i] += this.state.intradayPortfolio2.o[i]
    //     }
    //     console.log("peeeeeeeeee", this.state.portfolioPrices);
    //   }
    // )
    // .then(() => this.setState({loading: false}))
  // }














// THIS ALLOWS 2 TO BE ADDED T OEAHCHCHCHHCHCHCHCHHCCH

// componentDidMount() {
//   StonkAPI.fetchStonkIntraday("TSLA", this.marketOpen, this.marketClose, window.finnhubAPIKey)
//   .then((response) => this.setState({intradayPortfolio: response}))
//   .then(()=> StonkAPI.fetchStonkIntraday("GME", this.marketOpen, this.marketClose, window.finnhubAPIKey))
//     .then((response) => this.setState({intradayPortfolio2: response}))
//   .then(() => {
//     console.log("pooooooooop", this.props, this.state.intradayPortfolio.o)
//     //for loop
//     this.state.intradayPortfolio.o.forEach(element => {
//       this.state.portfolioPrices.push(element);
//       console.log("WEATHER THE ELEMENT:", this.state.portfolioPrices, element)
//     })}
//     )
//     .then(() => {
//       for (let i = 0; i < this.state.portfolioPrices.length; i++) {
//         this.state.portfolioPrices[i] += this.state.intradayPortfolio2.o[i]
//       }
//       console.log("peeeeeeeeee", this.state.portfolioPrices);
//     }
//   )
//   .then(() => this.setState({loading: false}))
// }













  // componentDidMount() {
  //   UserAPI.getAllStockBuys(this.props.currentUser.id)
  //     .then((response) => {response; this.setState({ownedStonks: response})})
  //     .then(() => this.setState({loading: false}))
  //     .then(() => {

  //     }

  //     )
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.stonk !== this.props.stonk) {
  //     StonkAPI.fetchStonkIntraday(this.props.stonk, this.marketOpen, this.marketClose, window.finnhubAPIKey)
  //     .then((response) => this.setState({intradayData: response}))
  //     .then(() => this.setState({loading: false}))
  //   }
  // }