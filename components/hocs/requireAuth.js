import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import initStore from '../../utils/createStore';


export default ChildComponent => {
  class RequireAuth extends Component {
    
    static getInitialProps (context) {
      console.log(context.res)
      const {auth} = context.store.getState();
      if(auth){
        return ChildComponent.getInitialProps(context)
      }else{
        return { isServer : context.isServer, res : context.res} 
      }
    }

    render() {
      switch (this.props.auth) {
        case false:
         if(this.props.isServer){
          this.props.res.redirect(301, "/");
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
