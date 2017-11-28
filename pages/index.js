import withRedux from 'next-redux-wrapper'
import React, { Component } from 'react';

import initStore from '../utils/createStore';
import Layout from '../components/Layout';
import UltimateRoot from '../components/hocs/ultimateRoot';
import Section1 from '../components/index/Section1'
import Section2 from '../components/index/Section2'
import Section3 from '../components/index/Section3'

class Home extends Component {

    static getInitialProps({ store, isServer, req }) {
    return { isServer }
  }

  render() {
  const {movies} = this.props;
  return(  <div>
        <Section1 />
        <Section2 movies={movies}/>
        <Section3 movies={movies}/>
    </div>)
  }
}

function mapStateToProps({movies}) {
  return { movies };
}

export default withRedux(initStore,mapStateToProps,)(UltimateRoot(Home))