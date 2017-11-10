'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _usersReducer = require('./usersReducer');

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = require('./authReducer');

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminReducer = require('./adminReducer');

var _adminReducer2 = _interopRequireDefault(_adminReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    admins: _adminReducer2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIlVzZXJzUmVkdWNlciIsIkF1dGhSZWR1Y2VyIiwiQWRtaW5SZWR1Y2VyIiwidXNlcnMiLCJhdXRoIiwiYWRtaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWtCLEFBRXpCOzs7Ozs7O0FBQStCLEFBQ3BCLEFBQ1A7QUFGMkIsQUFFckIsQUFDTjtBQUhKLEFBQWUsQUFBZ0IsQUFHbkI7QUFIbUIsQUFDM0IsQ0FEVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9raG9hLzlGdXJ5L1JlYWN0L25leHQtc2VydmVyIn0=