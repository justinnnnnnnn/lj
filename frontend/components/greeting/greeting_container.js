import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };
const mapStateToProps = (state) => {
  console.log(state)
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
