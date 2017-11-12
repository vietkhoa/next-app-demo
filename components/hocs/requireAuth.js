import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import initStore from '../../utils/createStore';
import { browserHistory } from 'react-router';

export default ChildComponent => {
  class RequireAuth extends Component {
    
    static getInitialProps (context) {
      const {auth} = context.store.getState();
      if(auth){
        return ChildComponent.getInitialProps(context)
      }else{
        return { isServer : context.isServer} 
      }
      // return ChildComponent.getInitialProps(context)
    }

    render() {
      switch (this.props.auth) {
        case false:
         if(this.props.isServer){
          browserHistory.push('/feature')
         }else{
          Router.push("/");
         }
          return null
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
