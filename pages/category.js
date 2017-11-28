import Layout from '../components/Layout'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import withRedux from 'next-redux-wrapper'
import initStore from '../utils/createStore';
import { bindActionCreators } from 'redux'
import UltimateRoot from '../components/hocs/ultimateRoot'
import Section2 from '../components/index/Section2'

class Category extends Component {
  static async getInitialProps({ store, isServer, req }) {
    return { isServer }
  }

  render() {
    const { movies } = this.props
    return (
        <div>
        <Section2 movies={movies} category/>
        </div>
    );
  }
}

function mapStateToProps({movies}) {
    return { movies };
}

export default withRedux(initStore, mapStateToProps)(UltimateRoot(Category))