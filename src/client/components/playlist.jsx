import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { getPlaylist } from '../actions';

class Playlist extends Component {
  componentDidMount() {
    this.props.getPlaylist();
  }

  componentDidUpdate() {
    console.log('Playlist data updated: ', this.props);
  }

  render() {
    if (!this.props.playlist.data) {
      return (
        <div>Loading playlist data...</div>
      )
    }
    const playlists = this.props.playlist.data;
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
