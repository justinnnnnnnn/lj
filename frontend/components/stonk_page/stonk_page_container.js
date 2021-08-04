import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Stonk from './stonk_page';
import fetchStonk from '../../actions/stonk_actions';
import fetchStonkNews from '../../actions/stonk_actions';
import fetchStonkBio from '../../actions/stonk_actions';

const mapStateToProps = (state, ownProps) => {
  const stonk = state.entities.stonks[ownProps.match.params.symbol]
  const data = stonk ? stonk.data : undefined
  const news = stonk ? stonk.news : undefined
  const bio = stonk ? stonk.bio : undefined
  return {
    stonk: stonk,
    data: data,
    currentUser: state.entities.users[state.session.id],
    news,
    bio,
    assets: state.entities.assets,
    watchedAssets: state.entities.watchedAssets,
    currentStonk: state.currentStonk,
    watchLists: state.entities.watchedAssets,
    stonks: state.entities.stonks
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchStonk: (symbol) => dispatch(fetchStonk(symbol)),
  fetchStonkBio: (symbol) => dispatch(fetchStonkBio(symbol)),
  fetchStonkNews: (symbol, fromDate, toDate ) => dispatch(fetchStonkNews(symbol, fromDate, toDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stonk);
