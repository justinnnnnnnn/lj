import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
// import StonkNewsArticles from './stonk_news_articles';
import Loading from '../loading/loading'

class StonkNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stonkNews: [],
    }
  }

  componentDidMount() {
      StonkAPI.fetchStonkNews(this.props.stonk, '2021-08-01', '2021-08-30', window.finnhubAPIKey)
      .then((response) => this.setState({stonkNews: response}))
      .then(() => this.setState({loading: false}))
    }

  componentDidUpdate(prevProps) {
      // debugger;
    if (prevProps.stonk !== this.props.stonk) {
      StonkAPI.fetchStonkNews(this.props.stonk, '2021-08-01', '2021-08-30', window.finnhubAPIKey)
      .then((response) => this.setState({stonkNews: response}))
      .then(() => this.setState({loading: false})) }
  }
  
  componentWillUnmount() {
    this.setState({loading: true})
  }
  
  render() {
    // console.log("WHY IS THE SYMBOL UNDEFINED", this.props.stonk)
    const timeSince = (date) => {
      return ` ${Math.floor(date / 86400 / 3600) + "h"}`
    }

    const newsItems = this.state.stonkNews.map((item, i) => 
        i < 3 &&
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

};

export default StonkNews;