import React from 'react';

class StonkNews extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)
  }


  render() {
    console.log(this.props)
    console.log("this.props of stonk news")
    // if (this.props.stonks[this.props.symbol].news === undefined || this.props.stonks[this.props.symbol].news.length < 1) {
    //   return null
    // } //PROBABLY NEED THIS

    let newsArticles = this.props.stonks[this.props.symbol].news

    function convertTimestamp(timestamp) {
      var d = new Date(timestamp * 1000),
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),
        dd = ('0' + d.getDate()).slice(-2),
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),
        ampm = 'AM',
        time;
      if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
      } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
      } else if (hh == 0) {
        h = 12;
      }
      time = h + ':' + min + ':' + ampm + ', ' + mm + '/' + dd + '/' + yyyy
      return time;
    }

    let firstArticle = () => {
      if (!newsArticles[0]) return null;
      let article = newsArticles[0]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let secondArticle = () => {
      if (!newsArticles[1]) return null;
      let article = newsArticles[1]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let thirdArticle = () => {
      if (!newsArticles[2]) return null;
      let article = newsArticles[2]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let fourthArticle = () => {
      if (!newsArticles[3]) return null;
      let article = newsArticles[3]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let fifthArticle = () => {
      if (!newsArticles[4]) return null;
      let article = newsArticles[4]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              {/* <img src={`${article.image}`} className="article-image" alt=""/> */}
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let sixthArticle = () => {
      if (!newsArticles[5]) return null;
      let article = newsArticles[5]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let seventhArticle = () => {
      if (!newsArticles[6]) return null;
      let article = newsArticles[6]
      let img = article.image
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let eigthArticle = () => {
      if (!newsArticles[7]) return null;
      let article = newsArticles[7];
      let img = article.image;
      if (img === "") img = "https://i.redd.it/d3t66lv1yce61.jpg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    // let isCollapsed = () => {
    //   if (this.state.collapsed) {
    //     return (
    //       <div className="news">
    //         <header className="news-title">
    //           <span className="news-title-1">
    //             News
    //         </span>
    //           <button onClick={this.toggleDescription} className="news-button">
    //             <span className={this.props.newsButtonClass}>Show More</span>
    //           </button>
    //         </header>
    //         <div className="news-articles">
    //           {firstArticle()}
    //           {secondArticle()}
    //           {thirdArticle()}
    //         </div>
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <div className="news">
    //         <header className="news-title">
    //           <span className="news-title-1">
    //             News
    //       </span>
    //           <button onClick={this.toggleDescription} className="news-button">
    //             <span className={this.props.newsButtonClass}>Show Less</span>
    //           </button>
    //         </header>
    //         <div className="news-articles">
    //           {firstArticle()}
    //           {secondArticle()}
    //           {thirdArticle()}
    //           {fourthArticle()}
    //           {fifthArticle()}
    //           {sixthArticle()}
    //           {seventhArticle()}
    //           {eigthArticle()}
    //         </div>
    //       </div>
    //     )
    //   }
    // }

    console.log("STONK NEWS OR NOT")
    return (
      <div>
        {/* {isCollapsed()} */}
        <div className="">
          {firstArticle()}
          {secondArticle()}
          {thirdArticle()}
          {fourthArticle()}
          {fifthArticle()}
          {sixthArticle()}
          {seventhArticle()}
          {eigthArticle()}
        </div>
      </div>
    )
  }
}

export default StonkNews;