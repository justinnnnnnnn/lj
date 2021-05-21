import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Stonk from './stonk_page';

const mapStateToProps = (state) => {
  // console.log(state)
  // return {
  //   formType: "login",
  //   currentUser: state.entities.users[state.session.id],
  // };
  // return state;
};

const mapDispatchToProps = (dispatch) => ({
  // processForm: () =>
  //   dispatch(login({ username: "stonkmaster420", password: "69" })),
  
  // logout: () => dispatch(logout()),
  // dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stonk);
