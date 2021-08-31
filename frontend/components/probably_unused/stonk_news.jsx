// import React from 'react';
// import * as StonkAPI from '../../util/stonk_api_util'
// import StonkNewsArticles from './stonk_news_articles';
// import Loading from '../loading/loading'

// class StonkNews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       stonkNews: {},
//     }
//   }

//   componentDidMount() {
//       StonkAPI.fetchStonkNews(this.props.stonk, '2021-08-01', '2021-08-30', window.finnhubAPIKey)
//       .then((response) => this.setState({stonkNews: response}))
//       .then(() => this.setState({loading: false}))
//     }

//   componentDidUpdate(prevProps) {
//       // debugger;
//     if (prevProps.stonk !== this.props.stonk) {
//       StonkAPI.fetchStonkNews(this.props.stonk, '2021-08-01', '2021-08-30', window.finnhubAPIKey)
//       .then((response) => this.setState({stonkNews: response}))
//       .then(() => this.setState({loading: false})) }
//   }
  
//   componentWillUnmount() {
//     this.setState({loading: true})
//   }
  
//   render() {
//     const thisStonk = this.props.stonk

//     if (this.state.loading) {
//       return <Loading/>
//     } else {
//       return (
//         <div>
//           <StonkNewsArticles stonk={thisStonk} stonkNews={this.state.stonkNews}/>
//           {/* <StonkNewsArticles/> */}
//         </div>
//       )
//     }
//   }

// };



    
// export default StonkNews;