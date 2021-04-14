import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { chart } from '../../actions/chart_actions';
import { Chart } from './chart'

const mapStateToProps = state => ({
  graph: state.graph //fix
});

const mapDispatchToProps = dispatch => ({
  chart: () => dispatch(chart()) //fix
})

export default connect(
  mapStateToProps
)(Chart)