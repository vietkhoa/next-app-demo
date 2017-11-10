import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import initStore from '../../utils/createStore';

export default ChildComponent => {
  class RequireAuth extends Component {
    
    render() {
      switch (this.props.auth) {
        case false:
          return  Router.push("/");
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
