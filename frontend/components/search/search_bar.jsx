import React from "react";
import { Link, withRouter } from 'react-router-dom'
import searchList from "./search_list";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      searchList: searchList,
      searchDisplay: [],
      setEnter: {},
    };
    this.buttonPress = this.buttonPress.bind(this)
  }

  searchFilter = () => {
    let inputUp = this.state.input.toUpperCase()
    let searchResult = []
    let searchArr = Object.values(this.state.searchList)
    
    if (this.state.input.length > 0) { // add just the ticker first
      searchArr.map((objectOfTickerAndName, i) => {
        if (objectOfTickerAndName.ticker.startsWith(inputUp)) {
          searchResult.push(
            <span className="search-item" key={i}>
              <Link to={`/stonks/${objectOfTickerAndName.ticker}`} onClick={this.closeModal}  className="link-search">
                {/* {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`} */}
                <div className="search-item-div">{`${objectOfTickerAndName.ticker}`}</div> <div className="search-item-div">{`${objectOfTickerAndName.name}`}</div>
              </Link>
            </span>
          )
        };
      });
    }

    if (searchResult.length < 8) {
      searchArr.map((objectOfTickerAndName, i) => {
        if (objectOfTickerAndName.name.toUpperCase().startsWith(inputUp)
        && !(objectOfTickerAndName.ticker.startsWith(inputUp))
        ){
          searchResult.push(
            <span className="search-item" key={i}>
              <Link to={`/stonks/${objectOfTickerAndName.ticker}`} className="link-search">
                {/* {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`} */}
                {/* <div className="">{`${objectOfTickerAndName.ticker}`}</div> <div className="">{`${objectOfTickerAndName.name}`}</div> */}
                <div className="search-item-div">{`${objectOfTickerAndName.ticker}`}</div> <div className="search-item-div">{`${objectOfTickerAndName.name}`}</div>
              </Link>
            </span>
          )
        };
      });
    }
    
    if (searchResult.length < 8) {
      searchArr.map((objectOfTickerAndName, j) => {
        if (
          (objectOfTickerAndName.ticker.includes(inputUp) || (objectOfTickerAndName.name.toUpperCase().includes(inputUp)) )
          && !(objectOfTickerAndName.ticker.startsWith(inputUp) || objectOfTickerAndName.name.toUpperCase().startsWith(inputUp))
        ){
          searchResult.push(
            <span className="search-item" key={this.state.searchDisplay.length + j}>
              <Link to={`/stonks/${this.state.input}`} className="link-search">
                {/* {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`} */}
                <div className="search-item-div">{`${objectOfTickerAndName.ticker}`}</div> <div className="search-item-div">{`${objectOfTickerAndName.name}`}</div>
              </Link>
            </span>
          )
        }
      });
    }
    console.log("search array", searchResult.slice(0, 8))
    return searchResult.slice(0, 8) 
  }

                  buttonPress = (e) => {
                    let inputUp = this.state.input.toUpperCase()
                    let searchResult = []
                    console.log("search list props", this.state.searchList)
                    let searchArr = Object.values(this.state.searchList)
                    console.log("by var name searchArr", Object.values(searchArr))
                    if (this.state.input.length > 0) { // add just the ticker first
                      searchArr.map((objectOfTickerAndName, i) => {
                        if (objectOfTickerAndName.ticker.startsWith(inputUp)) {
                          searchResult.push(
                            <div key={i}>
                              <Link onClick={this.closeModal} to={`/stonks/${objectOfTickerAndName.ticker}`}>
                                {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`}
                              </Link>
                            </div>
                          )
                        };
                      });
                    }
                
                    if (searchResult.length < 8) {
                      searchArr.map((objectOfTickerAndName, i) => {
                        if (objectOfTickerAndName.name.toUpperCase().startsWith(inputUp)
                        && !(objectOfTickerAndName.ticker.startsWith(inputUp))
                        ){
                          searchResult.push(
                            <div key={i}>
                              <Link to={`/stonks/${objectOfTickerAndName.ticker}`}>
                                {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`}
                              </Link>
                            </div>
                          )
                        };
                      });
                    }
                    
                    if (searchResult.length < 8) {
                      searchArr.map((objectOfTickerAndName, j) => {
                        if (
                          (objectOfTickerAndName.ticker.includes(inputUp) || (objectOfTickerAndName.name.toUpperCase().includes(inputUp)) )
                          && !(objectOfTickerAndName.ticker.startsWith(inputUp) || objectOfTickerAndName.name.toUpperCase().startsWith(inputUp))
                        ){
                          searchResult.push(
                            <div key={this.state.searchDisplay.length + j}>
                              <Link to={`/stonks/${this.state.input}`}>
                                {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`}
                              </Link>
                            </div>
                          )
                        }
                      });
                    }
                   
                  
                    this.closeModal();
                    return this.props.history.push(`${searchResult[0].props.children.props.to}`)
                  }
  
  go = e => {
    e.preventDefault();
  }

  setInput = (e) => { 
    this.setState({input: e.target.value});
  }

  closeModal = () => {
    this.setState({input: ""})
  }

  render(){
    return (
      <div className="search-bar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <form autoComplete="off" className="search-form" onSubmit={this.go}>
          <i className="fa fa-search"/>
          <input className="search-field" type="search" name="input" value={this.state.input} onChange={this.setInput} placeholder="Search" />
          <div className="hide-this-button"><button type="submit" onClick={this.buttonPress}></button></div>
          <br />
          <div className="search-dropdown"> {this.searchFilter()}</div>
        </form>
      </div>
    )
  }
}


export default withRouter(SearchBar);