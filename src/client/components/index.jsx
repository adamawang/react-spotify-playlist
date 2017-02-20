import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Playlist from './playlist';
import Song from './song';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Please log into your Spotify account</h1>
        <a href='/auth/spotify'><button className='spotify'>Spotify Auth</button></a>
        <div>TODO add spotify logo, change button to green</div>
      </div>
    )
  }
}

export default Index;
