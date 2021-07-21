import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import StonkNewsArticles from './stonk_news_articles';
import Loading from '../loading/loading'

class StonkNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stonkNews: {},
    }
  }

  componentDidMount() {
      StonkAPI.fetchStonkNews('GME', '2021-05-01', '2021-06-01', window.finnhubAPIKey)
      .then((response) => this.setState({stonkNews: response}))
      .then(() => this.setState({loading: false}))
    
    }
  
  componentWillUnmount() {
    this.setState({loading: true})
  }
  
  // let newsArticles = this.props.entities.stonks[this.props.symbol].news // doing it redux style
  render() {

    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          <StonkNewsArticles stonkNews={this.state.stonkNews}/>
        </div>
      )
    }
  }

};



    
export default StonkNews;