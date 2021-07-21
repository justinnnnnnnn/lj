import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class StonkNewsArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      image: "",
      source: "",
      summary: ""
    }

  }

  componentDidMount() {
    StonkAPI.fetchStonkNews('GME', window.finnhubAPIKey).then(
      (response) => this.setState({stonkNews: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      headline: this.state.stonkNews.headline, 
      image: this.state.stonkNews.image, 
      source: this.state.stonkNews.source,
      summary: this.state.stonkNews.summary,
    }))
  }
  render() {
    console.log(this.props)
    const newsArticlesArray = [];
    // for (let i = 0; i < 4; i++)
    newsArticlesArray.push({
      headline: this.props.stonkNews[0].headline
    })

    let firstArticle = () => {
      if (!newsArticlesArray[0]) return null;
      return (
        <div>
          {newsArticlesArray[0].headline}
        </div>
      )
    }

    console.log("STONK NEWS OR NOT")
    return (
      <div>
        <div className="top-news">
          {firstArticle()}
        </div>
        {/* <div className="more-news">
          {secondArticle()}
          {thirdArticle()}
          {fourthArticle()}
        </div> */}
      </div>
    )
  }
}

export default StonkNewsArticles;



// let fourthArticle = () => {
//       if (!newsArticles[3]) return null;
//       let article = newsArticles[3]
//       let img = article.image
//       if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
//       return (
//         <div className="article-1">
//           <a className="article-link" href={`${article.url}`} target="_blank">
//             <div className="article-2">
//               <span className="article-source">
//                 {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
//               </span>
//               <span className="article-title">
//                 {article.headline}
//               </span>
//               <span className="article-summary">
//                 {article.summary}
//               </span>
//               <img src={`${img}`} className="article-image" alt="" />
//             </div>
//           </a>
//         </div>
//       )