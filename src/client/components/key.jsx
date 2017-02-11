import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Key extends Component {
  componentDidMount() {
    const token = window.location.hash.slice(6);
    localStorage.setItem('token', token);
    hashHistory.push('/playlists');
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Key;
