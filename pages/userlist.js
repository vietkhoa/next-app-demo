import Layout from '../components/Layout'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import withRedux from 'next-redux-wrapper'
import initStore from '../utils/createStore';
import { bindActionCreators } from 'redux'
import UltimateRoot from '../components/hocs/ultimateRoot'

class UsersList extends Component {
  static async getInitialProps({ store, isServer, req }) {
    if(isServer){
    await store.dispatch(fetchUsers())
    }
    return { isServer }
  }

  componentWillMount(){
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
        <div>
          Here's a big list of users:
          <ul>{this.renderUsers()}</ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default withRedux(initStore, mapStateToProps, { fetchUsers })(UltimateRoot(UsersList))

// class UsersList extends Component {

//   componentDidMount() {
//     this.props.fetchUsers();
//   }

//   renderUsers() {
//     return this.props.users.map(user => {
//       return <li key={user.id}>{user.name}</li>;
//     });
//   }

//   render() {
//     return (
//       <div>
//         Here's a big list of users:
//         <ul>{this.renderUsers()}</ul>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   console.log(state)
//   return { users: state.users };
// }


// export default connect(mapStateToProps, { fetchUsers })(UltimateRoot(UsersList))
