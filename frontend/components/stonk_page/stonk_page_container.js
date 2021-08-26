import { connect } from 'react-redux';
import Stonk from './stonk_page';
import {fetchStonk} from '../../actions/stonk_actions';
import {fetchStonkNews} from '../../actions/stonk_actions';
import {fetchStonkBio} from '../../actions/stonk_actions';
import {updateBuyingPower} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const stonk = state.entities.stonks[ownProps.match.params.symbol]
  const stonks = state.entities.stonks
  // const stonk = state.entities.stonks[0]
  // const stonk = (window.location.href.split("stonks/")[1], window.finnhubAPIKey).toUpperCase()
  const data = stonk ? stonk.data : undefined
  const news = stonk ? stonk.news : undefined
  const bio = stonk ? stonk.bio : undefined
  return {
    stonks: stonks,
    stonk: stonk,
    data: data,
    currentUser: state.entities.users[state.session.id],
    news,
    bio,
    assets: state.entities.assets,
    watchedAssets: state.entities.watchedAssets,
    currentStonk: state.currentStonk,
    watchLists: state.entities.watchedAssets,
    // stonks: state.entities.stonks
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchStonk: (symbol) => dispatch(fetchStonk(symbol)),
  fetchStonkBio: (symbol) => dispatch(fetchStonkBio(symbol)),
  fetchStonkNews: (symbol, fromDate, toDate ) => dispatch(fetchStonkNews(symbol, fromDate, toDate)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stonk);
