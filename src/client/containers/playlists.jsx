import React, { Component } from 'react';
import Playlist from '../components/playlist';
import Song from '../components/song';

class Playlists extends Component {
  render() {
    return (
      <div>
        <p>hi</p>
        <Playlist />
        <Song />
      </div>
    )
  }
}
