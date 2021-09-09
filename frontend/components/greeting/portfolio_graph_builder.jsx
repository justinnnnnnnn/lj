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
      realData: [],
    }
    

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.odometerValue = this.odometerValue.bind(this)
    this.handleMouseLeave = this.handleMouseLeave(this)
  }

  portNow() {
    let multipliedPrices = []

    this.props.portfolioPrices.forEach((ele, i) => {
      let arr = []
      ele.o.forEach((element, index) => {
      arr.push((Number(element) * this.props.portfolio[i].shares))

      })
      multipliedPrices.push(arr);

    })
    let addedArrays = multipliedPrices[0]
    for(let i = 1; i < multipliedPrices.length; i++)
      for(let j = 0; j < multipliedPrices[0].length; j++)
      addedArrays[j] += multipliedPrices[i][j];

    const realData = [];
    if (this.props.portfolioPrices.length === this.props.portfolio.length) {

      for (let i = 0; i < addedArrays.length; i++)
      realData.push({
        time: this.props.portfolioPrices[0].t[i],
        price: (addedArrays[i] + Number(this.props.buyingPower)),
      })
    }
    return Number(realData[realData.length - 1].price).toFixed(2)
  }

  fullPortfolio() {
    let multipliedPrices = []

    this.props.portfolioPrices.forEach((ele, i) => {
      let arr = []
      ele.o.forEach((element, index) => {
      arr.push((Number(element) * this.props.portfolio[i].shares))

      })
      multipliedPrices.push(arr);

    })
    let addedArrays = multipliedPrices[0]
    for(let i = 1; i < multipliedPrices.length; i++)
      for(let j = 0; j < multipliedPrices[0].length; j++)
      addedArrays[j] += multipliedPrices[i][j];

    const realData = [];
    if (this.props.portfolioPrices.length === this.props.portfolio.length) {

      for (let i = 0; i < addedArrays.length; i++)
      realData.push({
        time: this.props.portfolioPrices[0].t[i],
        price: (addedArrays[i] + Number(this.props.buyingPower)),
      })
    }
    return realData
  }

  componentDidMount() {
    Promise.all(
      this.setState({realData: this.fullPortfolio()})
    )
    .then(() => 
    this.setState({currentPrice: this.state.realData[this.state.realData.length - 1][price]})
    );
    
  }

  componentDidUpdate(prev) {
    
  };

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



  customTooltip(e){
    if (e.active && e.payload!=null && e.payload[0]!=null) {
      return (<div className="custom-tooltip">
        <p>{e.payload[0].payload["Column Name"]}</p>
        </div>);
    } else {
      return "";
    }
  }

  render() {
    console.log("props", this.props)    
    let multipliedPrices = []
    this.props.portfolioPrices.forEach((ele, i) => {
      let arr = []
      ele.o.forEach((element, index) => {
      arr.push((Number(element) * this.props.portfolio[i].shares))

      })
      multipliedPrices.push(arr);

    })
    let addedArrays = multipliedPrices[0]
    for(let i = 1; i < multipliedPrices.length; i++)
      for(let j = 0; j < multipliedPrices[0].length; j++)
      addedArrays[j] += multipliedPrices[i][j];


    const realData = [];
    if ((this.props.portfolioPrices.length === this.props.portfolio.length) && this.props.portfolioPrices.length > 1) {

      for (let i = 0; i < addedArrays.length; i++)
      realData.push({
        time: this.props.portfolioPrices[0].t[i],
        price: (addedArrays[i] + Number(this.props.buyingPower)),
      })
    } 
    // else {
    //   realData.push(this.props.buyingPower - 1);
    //   realData.push(this.props.buyingPower);
    // }

    const valueStart = () => realData ? Number(realData[0].price).toFixed(2) : null
    const valueNow = () => realData ? Number(realData[realData.length - 1].price).toFixed(2) : null

    const dollarChange = () => {
      if ((valueNow() - valueStart()) > 0) {
        return (<span className="spanNumbers">+${(valueNow() - valueStart()).toFixed(2)}</span>)
      } else {
        return (<span className="spanNumbers">-${(valueStart() - valueNow()).toFixed(2)}</span>)
      }
    }
    
    const percentChange = () => {
      if ((valueNow / valueStart) > 1) {
        return (<span className="spanNumbers">(+{(valueNow() / valueStart()).toFixed(2)}%)</span>)
      } else {
        return (<span className="spanNumbers">(-{(valueStart() / valueNow()).toFixed(2)}%)</span>)
      }
    }




    return (
      <div className="chart">
        
        <div className="chartHeader"> 
          {/* <div className="currentPrice"> */} <div>
            {/* <h1 className="currentPrice">$<Odometer value={this.state.bigPrice} formatter={number => `$${number.toFixed(2)}`} /></h1> */}
            <h1 className="currentPrice">$<Odometer value={this.state.bigPrice} formatter={number => `$${number.toLocaleString('en-US',  {minimumFractionDigits: 2})}`} /></h1>
            
          </div>
          <div className="priceChanges">
            <div className="priceToday">
              <div className="priceTodayNumbers">
                {dollarChange()} {percentChange()} <span className="grayTag">Today</span>
              </div>
            </div>
          </div>
        </div>
    

      <div className="testChart">                 
       
        <ResponsiveContainer className="chartPrice">
          <LineChart 
            data={this.state.realData} 
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
              content={this.customTooltip}
            />
            <Line 
              classname="linear" 
              dataKey="price" 
              stroke="rgb(5, 200, 0)" 
              dot={false} 
              strokeWidth="2" />
              <ReferenceLine 
              y={valueStart} 
              strokeWidth="2" 
              stroke="rgb(111, 120, 126)" 
              strokeDasharray="1, 5.25925925925926" 
              strokeDashoffset="6.259259259259248" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer></footer>
    </div>
    )
  } 
}




export default Chart;