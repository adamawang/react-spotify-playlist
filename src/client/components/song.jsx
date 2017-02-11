import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { getSong } from '../actions';

class Song extends Component {
  render() {
    return (
      <div>This is the song component</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    songs: state.song,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSong }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
