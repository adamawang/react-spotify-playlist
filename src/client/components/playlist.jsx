import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { getPlaylist } from '../actions';

class Playlist extends Component {
  render() {
    return (
      <div>This is the playlist component</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
