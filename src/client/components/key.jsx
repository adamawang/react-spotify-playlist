import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Key extends Component {
  componentDidMount() {
    const token = window.location.hash;
    console.log('token?: ', token);
    localStorage.setItem('token', token);
    hashHistory.push('/playlist');
  }
}

export default Token;
