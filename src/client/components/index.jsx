import React from 'react';
import { hashHistory } from 'react-router';
import Playlist from './playlist';
import Song from './song';

class Index extends component {
  render() {
    return (
      <div>
        <h1>Please log into your Spotify account</h1>
        <a href='/auth/spotify'><button>Spotify Auth</button></a>
      </div>
    )
  }
}

export default Index;
