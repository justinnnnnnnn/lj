import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'


class StonkBioAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }

  }

  componentDidMount() {
    StonkAPI.fetchStonkBio('GME', window.finnhubAPIKey).then(
      (response) => this.setState({stonkBio: response})).then(
        () => this.setState({loading: false})).then(
          () => this.setState({
      name: this.state.stonkBio.name
    }))
  }
  render() {
    console.log(this.props)
    const companyProfile = { name: this.props.stonkBio.name }

    let bio = () => {
      return (
        <div>
          {`${companyProfile.name} is a stock to like.`}
        </div>
      )
    }
    
    console.log("STONK NEWS OR NOT")
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