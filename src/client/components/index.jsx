import React from 'react';
import { hashHistory } from 'react-router';
import Playlist from './playlist';
import Song from './song';

class Index extends component {
  render() {
    return (
      <div>
        <Playlist />
        <Song />
      </div>
    )
  }
}
