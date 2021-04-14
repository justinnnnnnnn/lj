import React from 'react';
// import {
//   ResponsiveContainer,
//   LineChart,
//   XAxis,
//   YAxis,
//   ReferenceLine,
//   Line,
//   Tooltip,
//   CartesianGrid,
// } from 'recharts';

export const ChartHeader = () => ( //map the price to generate divs
  <div className="chartHeader"> 
    <div className="currentPrice">
      <h1>
        <div>$</div>
        <div>5</div>
        <div>.</div>
        <div>1</div>
        <div>1</div>
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
)