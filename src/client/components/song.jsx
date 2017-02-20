import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { getSong } from '../actions';

class Song extends Component {
  componentDidMount() {
    this.props.getSong();
  }

  componentDidUpdate() {
    // console.log('Songs state updated: ', this.props.songs)
  }

  render() {
    if (!this.props.songs.data) {
      return (
        <div>Loading Song data...</div>
      )
    }
    const songs = this.props.songs.data.items;
    const randomSong = Math.floor(Math.random() * songs.length) + 1;
    const song = songs[randomSong];
    return (
      <div>
        <div>{song.track.name}</div>
        <img src={song.track.album.images[0].url} />
      </div>
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
