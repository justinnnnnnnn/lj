import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    formType: "login",
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  processForm: () =>
    dispatch(login({ username: "stonkmaster420", password: "69" })),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
