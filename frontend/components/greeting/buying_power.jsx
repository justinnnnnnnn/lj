import React from 'react';
import * as UserAPI from '../../util/user_api_util'
import { Link } from 'react-router-dom'

class BuyingPower extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        loading: true,
        buyingPower: 0,
      }
    }

  componentDidMount() {
    UserAPI.getBuyingPower(this.props.currentUser.id)
      .then((response) => {response; this.setState({buyingPower: response.buyingPower})})
      .then(() => this.setState({loading: false}))
  }
  
  render() {
    {console.log("the buying power", this.state)}
    if (this.state.loading) {
      return (<div/>)
    } else {
      return (
        <div className="buying-power">
          <div>
            Buying Power
          </div>
          <div>
            ${ Number(this.state.buyingPower).toLocaleString('en-US',  {minimumFractionDigits: 2}) }
          </div>
        </div>
      )
    }
  }

}

export default BuyingPower;