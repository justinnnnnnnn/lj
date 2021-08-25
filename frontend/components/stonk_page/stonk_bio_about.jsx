import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class StonkBioAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }

  }

  componentDidUpdate() {
    if (this.props.stonk.symbol !== this.props.thisStonk) {
      StonkAPI.fetchStonkBio(this.props.stonk, window.finnhubAPIKey).then(
      (response) => this.setState({stonkBio: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      name: this.state.stonkBio.name
    }))}
  }
  render() {
    const companyProfile = { name: this.props.stonkBio.name }

    let bio = () => {
      return (
        <div>
          {`${companyProfile.name} is a stock to like.`}
        </div>
      )
    }
    
    return (
      <div>
        <div>
          {bio()}
        </div>
      </div>
    )
  }
}

export default StonkBioAbout;