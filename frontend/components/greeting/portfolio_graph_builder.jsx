import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
  Tooltip,
} from 'recharts';
import Odometer from 'react-odometerjs';
import * as StonkAPI from '../../util/stonk_api_util'

  
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioPrices: this.props.portfolioPrices,
      quoteData: {},
      quoteData2: {},
      previousClose: 0,
      bigPrice: 0,
      currentPrice: 0,
      yarg: [],
    }
    

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.odometerValue = this.odometerValue.bind(this)
    this.handleMouseLeave = this.handleMouseLeave(this)
  }

  // componentDidMount() {
  //     this.props.portfolioPrices.forEach((ele, i) => 
  //     {
  //       ele.o.forEach((pricePoint, index) => {
  //         console.log("this.state.yarg", this.state.yarg, "this.props.portfolio[i].shares", this.props.portfolio[i].shares)
  //         this.setState((prevState) => (console.log("prevState", prevState), {yarg: [...prevState.yarg, Number(Number(pricePoint) * Number(this.props.portfolio[i].shares))]}
  //         ))
  //       })
  //     });
  //   console.log(this.state.yarg)   
  // }
  // componentDidMount() {
  //     this.props.portfolioPrices.forEach((ele, i) => {
  //       ele.o.forEach((pricePoint, index) => {
  //         this.setState((prevState) => // ({yarg: [...prevState.yarg, Number(Number(pricePoint) * Number(this.props.portfolio[i].shares))]})
  //         // mutate the element at ele.o[index]
  //           ({portfolioPrices[i].o[index] = Number(Number(pricePoint) * Number(this.props.portfolio[i].shares))})
  //         )
  //       })
  //     });
  //   console.log(this.state.portfolioPrices)   
  // }
      
      



  // componentDidMount(){
     
  //     {
  //       this.state.portfolioPrices.forEach((ele, i) => {
  //       this.state.portfolioPrices.forEach((element, index) => {
  //         this.state.portfolioPrices[i][index] = element * this.props.portfolio[i].shares
  //       })})
  //       console.log("portfolio prices.o", this.state.portfolioPrices);
  //       for(let i = 1; i < this.state.portfolioPrices.length; i++)
  //       for(let j = 0; j < this.state.portfolioPrices[0].o.length; j++)
  //       this.state.portfolioPrices[0].o[j] += this.state.portfolioPrices[i][j];
  //       console.log("portfolio prices[0]", this.state.portfolioPrices[0]);
  //     }
  // }

  handleMouseOver(e) {
    if (e.activePayload) {
      let price = e.activePayload[0].value;
      if (price) {
        this.setState({
          bigPrice: price,
        });
      }
    } else {
      this.setState({
        bigPrice: this.state.currentPrice,
      });
    }
  }
  
  
  handleMouseLeave() {
    this.setState({
      bigPrice: this.state.currentPrice,
    });
  }
  
  odometerValue(price) {
    price = this.handleMouseOver;
  }

  render() {    
    let multipliedPrices = []

    this.state.portfolioPrices.forEach((ele, i) => {
      let arr = []
      ele.o.forEach((element, index) => {
      arr.push((Number(element) * this.props.portfolio[i].shares))

      })
      multipliedPrices.push(arr);
      console.log("multiplied prices", multipliedPrices)
    })
    let addedArrays = multipliedPrices[0]
    for(let i = 1; i < multipliedPrices.length; i++)
      for(let j = 0; j < multipliedPrices[0].length; j++)
      addedArrays[j] += multipliedPrices[i][j];
    console.log("added arrays", addedArrays)

    const realData = [];
    if (this.props.portfolioPrices.length === this.props.portfolio.length) {

      for (let i = 0; i < addedArrays.length; i++)
      realData.push({
        time: this.props.portfolioPrices[0].t[i],
        price: (addedArrays[i] + Number(this.props.buyingPower)),
      })
    }

    // const dottedLine = this.state.previousClose;

    return (
      <div className="chart">
        
        <div className="chartHeader"> 
          <div className="currentPrice">
            <h1>$<Odometer value={this.state.bigPrice} formatter={number => `$${number.toFixed(2)}`} /></h1>
          </div>
          <div className="priceChanges">
            <div className="priceToday">
              <div className="priceTodayNumbers">
                <span className="spanNumbers">{`-`}{`$0.00`}</span> {/* make these variables */}
                <span className="spanNumbers">{`(`}{`+`}{`1.16%`}{`)`}</span>  {/* make these variables */}
                <span className="grayTag">Today</span>
              </div>
            </div>
            <div className="priceAfterHours">
              <div className="priceAfterHoursNumbers">
                <span className="spanNumbers">{`+`}{`$0.08`}</span>               {/* make these variables */}
                <span className="spanNumbers">{`(`}{`+`}{`2.16%`}{`)`}</span>      {/* make these variables */}
                <span className="grayTag">After Hours</span>                   
              </div>
            </div>
          </div>
        </div>
    

      <div className="testChart">                 
       
        <ResponsiveContainer className="chartPrice">
          <LineChart 
            data={realData} 
            onMouseMove={this.handleMouseOver} 
            onMouseLeave={this.handleMouseLeave}>
            <XAxis
              type="number" 
              domain={['dataMin', 'dataMax']} 
              dataKey="time"
              hide={true} 
              />
            <YAxis 
              domain={['dataMin', 'dataMax']} 
              dataKey="price"
              axisLine={false}
              tickLine={false}
              hide={true} 
            />
            <Tooltip 
              formatter={number => `$${number.toFixed(2)}`} 
              />
            <Line 
              classname="linear" 
              dataKey="price" 
              stroke="rgb(5, 200, 0)" 
              dot={false} 
              strokeWidth="2" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer>🥴</footer>
    </div>
    )
  } 
}




export default Chart;