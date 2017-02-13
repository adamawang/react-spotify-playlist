import React, { Component } from 'react';
import Playlist from '../components/playlist';
import Song from '../components/song';
import User from '../components/user';

export default function Playlists() {
  return (
    <div>
      <User />
      <Playlist />
      <Song />
    </div>
  )
}
