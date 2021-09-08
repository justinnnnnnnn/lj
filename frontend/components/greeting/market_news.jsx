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
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  addDefaultSrc(e) {
    e.target.src = 'https://i.redd.it/oab62rqye5731.jpg'
  }

  render() {
    const timeSince = (date) => {
      return ` ${Math.floor(date / 86400 / 3600) + "h"}`
    }

    const newsItems = this.state.marketNews.map((item, i) => 
      !(item.source === 'Bloomberg') &&
        (<a className="news-url" href={item.url} key={i} target="_blank">
          <div className='news-article' key={i}>
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

            <div className="news-right">
              <img src={item.image} onError={this.addDefaultSrc} className="news-article-image"/>
              <br></br><br></br>
            </div>
          </div>
        </a>
        )
      )
    

    return (
      <div>
      {newsItems.slice(0, 10)}

        
      </div>
    )
  }
}

export default MarketNews;