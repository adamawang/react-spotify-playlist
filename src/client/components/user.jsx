import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { userInfo } from '../actions';

class User extends Component {
  componentDidMount() {
    this.props.userInfo();
  }

  componentDidUpdate() {
    // console.log('updated: ', this.props)
  }

  render() {
    if (!this.props.info.data) {
      return (
        <div>Loading User data...</div>
      )
    }
    const user = this.props.info.data;
    return (
      <div>
        <div>Hello, {user.display_name}</div>
        <img src={user.images[0].url} />
      </div>

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
