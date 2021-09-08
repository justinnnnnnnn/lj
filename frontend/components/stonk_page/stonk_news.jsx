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
      StonkAPI.fetchStonkNews(this.props.stonk, '2021-09-01', '2021-09-07', window.finnhubAPIKey)
      .then((response) => this.setState({stonkNews: response}))
      .then(() => this.setState({loading: false}))
    }

  componentDidUpdate(prevProps) {
      // debugger;
    if (prevProps.stonk !== this.props.stonk) {
      StonkAPI.fetchStonkNews(this.props.stonk, '2021-09-01', '2021-09-07', window.finnhubAPIKey)
      .then((response) => this.setState({stonkNews: response}))
      .then(() => this.setState({loading: false})) }
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

    const newsItems = this.state.stonkNews.map((item, i) => 
        i < 4 &&
        (
          <a className="news-url" href={item.url}  target="_blank">
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
        </a>)
      )
    

    return (
      <div>
      {newsItems}
      </div>
    )
  }

};

export default StonkNews;