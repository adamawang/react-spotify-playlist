import React, { Component } from 'react';
import Playlist from '../components/playlist';
import Song from '../components/song';
import User from '../components/user';

export default class Playlists extends Component {
  render() {
    return (
      <div>
        <p>hi</p>
        <User />
        <Playlist />
        <Song />
      </div>
    )
  }
}
