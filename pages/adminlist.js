import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import withRedux from 'next-redux-wrapper'
import UltimateRoot from '../components/hocs/ultimateRoot'
import initStore from '../utils/createStore';

class AdminsListPage extends Component {

    static async getInitialProps({ store, isServer, req }) {
        // if(isServer){
        await store.dispatch(fetchAdmins())
        // }
        return { isServer }
      }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default withRedux(initStore, mapStateToProps, { fetchAdmins })((UltimateRoot(requireAuth(AdminsListPage))))
