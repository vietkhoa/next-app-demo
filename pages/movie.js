import withRedux from 'next-redux-wrapper'
import React, { Component } from 'react';
import { fetchCurrentMovie } from '../actions'
import initStore from '../utils/createStore';
import UltimateRoot from '../components/hocs/ultimateRoot';
import Section1 from '../components/movie/Section1'
import Error from 'next/error'

class Movie extends Component {

  static getInitialProps({ store, isServer, req, query: { id } }) {
    store.dispatch(fetchCurrentMovie(id))
    return { isServer }
  }

  render() {
    const { selectedMovie } = this.props
    if (selectedMovie == null) {
      const { selectedMovie } = this.props
      return <Error/>;
    } else {
      return (<div style={{ marginTop: '200px' }}>
        <Section1 movie={selectedMovie} />
      </div>)
    }
  }
}

function mapStateToProps({ selectedMovie }) {
  return { selectedMovie }
}

export default withRedux(initStore, mapStateToProps, { fetchCurrentMovie })(UltimateRoot(Movie))