import React from 'react';
import * as StonkAPI from '../../util/stonk_api_util'
import StonkBioAbout from './stonk_bio_about';
import Loading from '../loading/loading'

class StonkBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stonkBio: {},
    }
  }

  componentDidMount() {
      StonkAPI.fetchStonkBio('GME', window.finnhubAPIKey)
      .then((response) => this.setState({stonkBio: response}))
      .then(() => this.setState({loading: false}))
    
    }
  
  componentWillUnmount() {
    this.setState({loading: true})
  }
  
  render() {

    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <div>
          <StonkBioAbout stonkBio={this.state.stonkBio}/>
        </div>
      )
    }
  }

};

export default StonkBio;