
import Layout from '../components/Layout'
import UltimateRoot from '../components/hocs/ultimateRoot'
import withRedux from 'next-redux-wrapper'
import initStore from '../utils/createStore';
import React, { Component } from 'react';

class Home extends Component {

    static getInitialProps({ store, isServer, req }) {
    return { isServer }
  }

  render() {
  return(  <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>)
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { users: state.users };
}

export default withRedux(initStore,mapStateToProps)(UltimateRoot(Home))