import StonkNews from '../stonk_page/stonk_news';
import { connect } from 'react-redux';
import { fetchStonkNews } from '../../actions/stonk_actions';

const mapStateToProps = state => {
  return {
    stonks: state.entities.stonks
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStonkNews: (symbol, fromDate, toDate) => dispatch(fetchStonkNews(symbol, fromDate, toDate))
})


export default connect(mapStateToProps, mapDispatchToProps)(StonkNews);