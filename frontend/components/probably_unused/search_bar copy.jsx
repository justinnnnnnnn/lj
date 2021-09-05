// import React from "react";
// import { Link, withRouter } from 'react-router-dom'

// class SearchBar extends React.Component {
//   state = {
//     code: '' // initial value
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     this.buttonPress = this.buttonPress.bind(this)
//     // this.goStonk = this.goStonk.bind(this)
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //   const user = Object.assign({}, this.state);
//   //   this.props.processInput(user);
//   // }
//   buttonPress = (e) => {
//     this.props.history.push(`/stonks/${this.state.input}`)
//   }
//   // save code in state on change
//   setInput = e => this.setState({input: e.target.value})
  
//   // change href to be this.state.code value
//   go = e => {
//     // console.log("navigate to stonkpage")

//     e.preventDefault();
//           // window.location.href = "/#/stonks/" + this.state.input
//           // <Link to={`/stocks/${this.state.stockSymbol}`} key={window.location.pathname} ></Link>;
//     // <Link to={`/stonks/${this.state.input}`} />
//           // window.location.href = "/#/stonks/" + this.state.input
    
//   }
  
//   render(){
//     return (
//       <div className="search-bar">

//         <form onSubmit={this.go}>
//           {/* <div>duped input: {this.state.input}</div> */}
//           <input type="text" name="input" value={this.state.input} onChange={this.setInput} placeholder="ticker name here" />
//           <Link to={`/stonks/${this.state.input}`}>The Link: {`${this.state.input}`}</Link>
//           <button onClick={this.buttonPress}>button</button>
//           {/* <Link to={`/stonks/${this.state.input}`} /> */}
//           {/* <input type="button" onClick={this.go} /> */}
//         </form>
//       </div>
//     )
//   }
// }





// // const searchInput = (props) => {
// //   // this takes in somethin
// // }

// // const SearchBar = () => {
// //   return (
// //     <div className="search-bar">
// //       <input
// //         type="text"
// //         // value={"yo mama"}
// //         // onChange={searchInput}
// //         className="search-field"
// //       />
// //       {/* thing that inserts all the backend stonks */}
// //     </div>
// //   );
// // };

// export default withRouter(SearchBar);