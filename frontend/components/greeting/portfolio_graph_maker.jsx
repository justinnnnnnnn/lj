// import React from 'react';
// import * as UserAPI from '../../util/user_api_util'
// import PortfolioGraph from './portfolio_graph';

// class OwnedStonks extends React.Component {
//   constructor(props) {
//     super(props)
//       this.state = {
//         loading: true,
//         ownedStonks: {}
//       }
//     }

//   componentDidMount() {
//     UserAPI.getAllStockBuys(this.props.currentUser.id)
//       .then((response) => {response; this.setState({ownedStonks: response})})
//       .then(() => this.setState({loading: false}))
//   }

//   // componentDidUpdate() {

//   // }
  
//   render() {
  
//     console.log("portfolio state", this.state)
//     if (this.state.loading) {
//       return (<div/>)
//     } else {
//       const portfolio = this.state.ownedStonks.map((stonk) => )
//       return (
//         <>
//           <PortfolioGraph portfolio={portfolio}/>
//         </>
//       )
//     }
//   }

// }

// export default OwnedStonks;