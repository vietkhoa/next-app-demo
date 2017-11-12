import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import initStore from '../../utils/createStore';
import LayOut from '../Layout';
import { fetchUsers, fetchCurrentUser } from '../../actions';

export default ChildComponent => {
    class UltimateRoot extends Component {
        static async getInitialProps (context) {
            if(context.isServer){
            await context.store.dispatch(fetchCurrentUser())
            }
            return ChildComponent.getInitialProps(context)
          }

        render() {
            return (
                <LayOut>
                    <ChildComponent {...this.props} />
                </LayOut>
            )
        }
    }

    function mapStateToProps(state) {
  return { users: state.users };
}

    return connect(mapStateToProps,{fetchUsers})(UltimateRoot)
};
