import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import initStore from '../../utils/createStore';
import LayOut from '../Layout';
import { fetchUsers, fetchCurrentUser } from '../../actions';

export default ChildComponent => {
    class UltimateRoot extends Component {
        static async getInitialProps({ store, isServer, req }) {
            if (isServer) {
                if (req.path == "/user") {
                    console.log("dispatch user")
                    await store.dispatch(fetchUsers())
                }
            }
            store.dispatch(fetchCurrentUser())
            return { isServer }
        }

        render() {
            return (
                <LayOut>
                    <ChildComponent {...this.props} />
                </LayOut>
            )
        }
    }

    return withRedux(initStore)(UltimateRoot);
};
