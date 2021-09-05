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


  

  setInput = (e) => { 
    this.setState({input: e.target.value});
  }

  searchFilter = () => {
    let inputUp = this.state.input.toUpperCase()
    let searchResult = []
    console.log("search list props", this.state.searchList)
    let searchArr = Object.values(this.state.searchList)
    console.log("by var name searchArr", Object.values(searchArr))
    
    if (this.state.input.length > 0) { // add just the ticker first
      searchArr.map((objectOfTickerAndName, i) => {
        if (objectOfTickerAndName.ticker.startsWith(inputUp)) {
          searchResult.push(
            <div className="search-item" key={i}>
              <Link to={`/stonks/${objectOfTickerAndName.ticker}`}>
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
            <div className="search-item" key={i}>
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
            <div className="search-item" key={this.state.searchDisplay.length + j}>
              <Link to={`/stonks/${this.state.input}`}>
                {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`}
              </Link>
            </div>
          )
        }
      });
    }

    return searchResult.slice(0, 8)
  }

                  buttonPress = (e) => {
                    // this.props.history.push(`${searchResult()[0].props.children.props.to}`)
                    let inputUp = this.state.input.toUpperCase()
                    let searchResult = []
                    console.log("search list props", this.state.searchList)
                    let searchArr = Object.values(this.state.searchList)
                    console.log("by var name searchArr", Object.values(searchArr))
                    
                    if (this.state.input.length > 0) { // add just the ticker first
                      searchArr.map((objectOfTickerAndName, i) => {
                        if (objectOfTickerAndName.ticker.startsWith(inputUp) || (objectOfTickerAndName.name.toUpperCase().startsWith(inputUp))) {
                          searchResult.push(
                            <div className="search-item" key={i}>
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
                            <div className="search-item" key={this.state.searchDisplay.length + j}>
                              <Link to={`/stonks/${this.state.input}`}>
                                {`${objectOfTickerAndName.name}, ${objectOfTickerAndName.ticker}`}
                              </Link>
                            </div>
                          )
                        }
                      });
                    }

                    return this.props.history.push(`${searchResult[0].props.children.props.to}`)
                  }
  
  go = e => {
    e.preventDefault();
  }

  render(){
    return (
      <div className="search-bar">
        {console.log("the search list", this.state.searchList)}

        <form onSubmit={this.go}>
          <input type="text" name="input" value={this.state.input} onChange={this.setInput} placeholder="ticker name here" />
          <div className="hide-this-button"><button type="submit" onClick={this.buttonPress}></button></div>

          <br />
          {/* <div className="search-dropdown">{this.state.searchDisplay}</div> */}
          <div className="search-dropdown">{this.searchFilter()}</div>
        </form>
      </div>
    )
  }
}


export default withRouter(SearchBar);