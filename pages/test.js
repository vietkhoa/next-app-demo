
import Layout from '../components/Layout'
import UltimateRoot from '../components/hocs/ultimateRoot'
import withRedux from 'next-redux-wrapper'
import initStore from '../utils/createStore';
import React, { Component } from 'react';

class About extends Component {

  static getInitialProps({ store, isServer, req }) {
    return { isServer }
  }

  render() {
    return(
    <div>
      <p>Hello, I'm About.js</p>
    </div>
  )
}
}

export default withRedux(initStore)(UltimateRoot(About))