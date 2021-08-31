import React from 'react';
import * as StonkAPI from'../../util/stonk_api_util'

class MarketNews extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        marketNews: ["!", ",", "!", ",", "!", ",", "!", ",", "!", ",", "!", ",", "!", ","],
      }
  }
  


  componentDidMount() {
    StonkAPI.fetchMarketNews()
      .then((response) => this.setState({marketNews: response}))
      .then(() => this.setState({loading: false}));
      console.log("what is the state??", this.state)
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  
  












  
    render() {
      const timeSince = (date) => {
        return ` ${Math.floor(date / 86400 / 3600) + "h"}`
      }

      const newsItems = this.state.marketNews.map((item, i) => 
          i < 10 &&
          (<div class='news-article' key={i}>
            <div className="news-left">
              <div className="news-article-headline-and-time">
                <div className="news-article-headline">{item.source} </div>
                <div className="news-article-time">{timeSince(item.datetime)}</div>
              </div>
                                        <br></br>
              <div>
                {item.headline} 
              </div>
                                        <br></br>
            </div>

            <div news-right>
              <img src={item.image} className="news-article-image"/>
              <br></br><br></br>
            </div>
          </div>)
        )
      

      return (
        <div>
        {newsItems}

          
        </div>
      )
    }
}

export default MarketNews;




{/* <div class='news-article' key={i}>
            <div className="news-left">
              <div className="news-article-headline-and-time">
                <div className="news-article-headline">{this.state.marketNews[i].source} </div>
                <div className="news-article-time">{timeSince(this.state.marketNews[i].datetime)}</div>
              </div>
                                        <br></br>
              <div>
                {this.state.marketNews[i].headline} 
              </div>
                                        <br></br>
            </div>

            <div news-right>
              <img src={this.state.marketNews[0].image} class="news-article-image"/>
              <br></br><br></br>
            </div>
          </div> */}