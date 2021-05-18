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
      quoteData: {},
      previousClose: 0,
      bigPrice: 0,
      currentPrice: 0
    }
    

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.odometerValue = this.odometerValue.bind(this)
    this.handleMouseLeave = this.handleMouseLeave(this)
  }

  handleMouseOver(e) {
    if (e.activePayload) {
      let price = e.activePayload[0].value;
      if (price) {
        this.setState({
          bigPrice: price,
        });
      }
    } else {
      console.log(this.state.currentPrice)
    this.setState({
          bigPrice: this.state.currentPrice,
        });
    }
  }
  
  
  handleMouseLeave() {
    console.log(this.state.currentPrice)
    this.setState({
          bigPrice: this.state.currentPrice,
        });

  }
  
  odometerValue(price) {
    price = this.handleMouseOver;
  }
  
  componentDidMount() {
    StonkAPI.fetchStonkCurrentPrice('GME', window.finnhubAPIKey).then(
      (response) => this.setState({quoteData: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      bigPrice: this.state.quoteData.c, 
      currentPrice: this.state.quoteData.c, 
      previousClose: this.state.quoteData.pc
    }))
  }

  render() {
    console.log(this.props.intradayData)
    
    const realData = [];
    for (let i = 0; i < this.props.intradayData.t.length; i++)
    realData.push({
      time: this.props.intradayData.t[i],
      price: this.props.intradayData.o[i],
    })
    const dottedLine = this.state.previousClose;
    
    console.log('this!!!!!!!!!!')
    console.log(realData)
    console.log('this!!!!!!!!!!')

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
            <ReferenceLine 
              y={dottedLine} 
              strokeWidth="2" 
              stroke="rgb(111, 120, 126)" 
              strokeDasharray="1, 5.25925925925926" 
              strokeDashoffset="6.259259259259248" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer>🥴</footer>
    </div>
    )
  } 
}




export default Chart;