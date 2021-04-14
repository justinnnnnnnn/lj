import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
  Tooltip,
  CartesianGrid,
} from 'recharts';
// import { ChartHeader } from './chart_header'; // I think it's best in this page
// import Odometer from 'odometer'
import Odometer from 'react-odometerjs';

  
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOverPrice: 0
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }


  // tooltipMouseOver(e) {
  //  <div className="customMouseOver">
  //    //e hold the line data in payload element
  //  </div>
  // };
  

  handleMouseOver(e) {

  }

  counter(num) {
    var i = 0;
    while ( i < 1000 ) {
        // This block will be executed 100 times.
        setInterval(num + i, 1000);
        i++; // Increment i
    }
  }

  // onHover = () => this.setState({ hovered: true });
  // offHover = () => this.setState({ hovered: false });


  render() {
    const fakeData = [];
    for (let num = 30; num >= 0; num--)
      fakeData.push({
        date: `${num} days ago`, //substring
        value: 0.5 + Math.random(),
    })
    const dottedLine = fakeData[0].value;

    return (
      <div className="chart">
        {/* ChartHeader = () => ( //map the price to generate divs */}
            <div className="chartHeader"> 
              <div className="currentPrice">
                {/* <h1>{hoverPrice} */}
                <h1>$<Odometer value={4545454}/>
                  {/* <div>$</div>
                  <div>5</div>
                  <div>.</div>
                  <div>1</div>
                  <div>1</div> */}
                </h1>
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
        {/* <ChartHeader/> */}

      <div className="testChart">
        <ResponsiveContainer className="chartPrice">
          <LineChart data={fakeData}>
            <XAxis 
              dataKey="date"
              hide={true}
              />
            <YAxis 
              dataKey="value"
              axisLine={false}
              tickLine={false}
              hide={true}
            />
            <Tooltip formatter={number => `$${number.toFixed(2)}`}/>
            {/* <CartesianGrid/> */}
            <Line classname="line" dataKey="value" stroke="rgb(5, 200, 0)" dot={false} strokeWidth="2"/> {/*/onMouseOver={console.log('yomama')}*/}
            <ReferenceLine y={dottedLine} strokeWidth="2" stroke="rgb(111, 120, 126)" strokeDasharray="1, 5.25925925925926" strokeDashoffset="6.259259259259248"  />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer>🥴</footer>
    </div>
    )
  } 
}




export default Chart;