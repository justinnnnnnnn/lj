import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class StonkBioAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stonkBio: {},
      name: ""
    }

  }

  componentDidMount() {
      StonkAPI.fetchStonkBio(this.props.stonk, window.finnhubAPIKey).then(
      (response) => this.setState({stonkBio: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      name: this.state.stonkBio.name
    }))
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
          <br/>
          {`${companyProfile.name} is a stock to like.`}<br/>
          Industry: {`${this.props.stonkBio.finnhubIndustry}`}<br/>
          Exchange: {`${this.props.stonkBio.exchange}`}<br/>
          Company URL: <a href={this.props.stonkBio.weburl}>{`${this.props.stonkBio.weburl}`}</a>
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