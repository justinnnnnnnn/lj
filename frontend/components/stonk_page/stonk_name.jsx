import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import Loading from '../loading/loading'

class StonkName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stonkBio: {},
    }
  }

  componentDidMount() {
    StonkAPI.fetchStonkBio(this.props.stonk, window.finnhubAPIKey)
      .then((response) => this.setState({stonkBio: response}))
      .then(() => this.setState({loading: false}))
  }

  componentDidUpdate(prevProps) {
  if (prevProps.stonk !== this.props.stonk) {
    StonkAPI.fetchStonkBio(this.props.stonk, window.finnhubAPIKey)
    .then((response) => this.setState({stonkBio: response}))
    .then(() => this.setState({loading: false})) }
  }
  
  componentWillUnmount() {
    this.setState({loading: true})
  }
  
  render() {
    const thisStonk = this.props.stonk
    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          {this.state.stonkBio.name}
        </div>
      )
    }
  }

};

export default StonkName;