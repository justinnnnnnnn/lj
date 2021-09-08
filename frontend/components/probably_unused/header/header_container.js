import { connect } from "react-redux";
import Header from "./header";


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
