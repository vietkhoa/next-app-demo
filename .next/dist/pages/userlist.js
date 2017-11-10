'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _createStore = require('../utils/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _redux = require('redux');

var _ultimateRoot = require('../components/hocs/ultimateRoot');

var _ultimateRoot2 = _interopRequireDefault(_ultimateRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/khoa/9Fury/React/next-server/pages/userlist.js?entry';


// class UsersList extends Component {
//   static async getInitialProps({ store, isServer, req }) {
//     if(isServer){
//     console.log("ok")
//     await store.dispatch(fetchUsers())
//     }
//     return { isServer }
//   }

//   componentWillMount(){
//     this.props.fetchUsers()
//   }

//   renderUsers() {
//     return this.props.users.map(user => {
//       return <li key={user.id}>{user.name}</li>;
//     });
//   }

//   render() {
//     return (
//       <Layout>
//         <div>
//           Here's a big list of users:
//           <ul>{this.renderUsers()}</ul>
//         </div>
//       </Layout>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { users: state.users };
// }

// export default withRedux(initStore, mapStateToProps, { fetchUsers })(UsersList)

var UsersList = function (_Component) {
  (0, _inherits3.default)(UsersList, _Component);

  function UsersList() {
    (0, _classCallCheck3.default)(this, UsersList);

    return (0, _possibleConstructorReturn3.default)(this, (UsersList.__proto__ || (0, _getPrototypeOf2.default)(UsersList)).apply(this, arguments));
  }

  (0, _createClass3.default)(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement('li', { key: user.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, user.name);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Here\'s a big list of users:', _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.renderUsers()));
    }
  }]);

  return UsersList;
}(_react.Component);

function mapStateToProps(state) {
  console.log(state);
  return { users: state.users };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })((0, _ultimateRoot2.default)(UsersList));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJsaXN0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImZldGNoVXNlcnMiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJVbHRpbWF0ZVJvb3QiLCJVc2Vyc0xpc3QiLCJwcm9wcyIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsInJlbmRlclVzZXJzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTLEFBQWtCOztBQUMzQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTyxBQUFrQjs7Ozs7Ozs7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0ksQUFFTTs7Ozs7Ozs7Ozs7d0NBRWdCLEFBQ2xCO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztrQ0FFYSxBQUNaO2tCQUFPLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxnQkFBUSxBQUNsQzsrQkFBTyxjQUFBLFFBQUksS0FBSyxLQUFULEFBQWM7c0JBQWQ7d0JBQUEsQUFBbUI7QUFBbkI7U0FBQSxPQUFQLEFBQU8sQUFBd0IsQUFDaEM7QUFGRCxBQUFPLEFBR1IsT0FIUTs7Ozs2QkFLQSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBRUUsZ0RBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FISixBQUNFLEFBRUUsQUFBSyxBQUFLLEFBR2Y7Ozs7O0FBbkJxQixBOztBQXNCeEIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1NBQU8sRUFBRSxPQUFPLE1BQWhCLEFBQU8sQUFBZSxBQUN2QjtBQUdEOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFpQixFQUF6QixBQUF5QixBQUFFLG1DQUFjLDRCQUF4RCxBQUFlLEFBQXlDLEFBQWEiLCJmaWxlIjoidXNlcmxpc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUva2hvYS85RnVyeS9SZWFjdC9uZXh0LXNlcnZlciJ9