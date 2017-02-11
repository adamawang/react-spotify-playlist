import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { userInfo } from '../actions';

class User extends Component {
  render() {
    return (
      <div>Hello person</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    info: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
