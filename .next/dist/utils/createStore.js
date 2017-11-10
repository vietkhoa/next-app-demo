'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var secondObject = arguments[1];

    var isServer = secondObject.isServer;
    var req = secondObject.req;
    var axiosInstance = void 0;
    if (isServer) {
        axiosInstance = _axios2.default.create({
            baseURL: 'http://react-ssr-api.herokuapp.com',
            headers: { cookie: req.get('cookie') || '' }
        });
    } else {
        axiosInstance = _axios2.default.create({
            baseURL: '/api'
        });
    }

    var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NyZWF0ZVN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJheGlvcyIsInJlZHVjZXJzIiwiSW1tdXRhYmxlIiwiaW5pdGlhbFN0YXRlIiwic2Vjb25kT2JqZWN0IiwiaXNTZXJ2ZXIiLCJyZXEiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJjb29raWUiLCJnZXQiLCJzdG9yZSIsIndpdGhFeHRyYUFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFFUDs7Ozs7O2tCQUFlLFlBQXFDO1FBQXBDLEFBQW9DLG1GQUFyQixBQUFxQjtRQUFqQixBQUFpQix5QkFFaEQ7O1FBQU0sV0FBVyxhQUFqQixBQUE4QixBQUM5QjtRQUFNLE1BQU0sYUFBWixBQUF5QixBQUN6QjtRQUFJLHFCQUFKLEFBQ0E7UUFBQSxBQUFJLFVBQVUsQUFDVjt3Q0FBZ0IsQUFBTTtxQkFBTyxBQUNoQixBQUNUO3FCQUFTLEVBQUUsUUFBUSxJQUFBLEFBQUksSUFBSixBQUFRLGFBRi9CLEFBQWdCLEFBQWEsQUFFaEIsQUFBK0IsQUFFL0M7QUFKZ0MsQUFDekIsU0FEWTtBQURwQixXQUtPLEFBQ0g7d0NBQWdCLEFBQU07cUJBQXRCLEFBQWdCLEFBQWEsQUFDaEIsQUFFaEI7QUFIZ0MsQUFDekIsU0FEWTtBQU9wQjs7UUFBTSxRQUFRLEFBQ1YsNENBRFUsQUFFVixjQUNBLDRCQUFnQixxQkFBQSxBQUFNLGtCQUgxQixBQUFjLEFBR1YsQUFBZ0IsQUFBd0IsQUFHNUM7O1dBQUEsQUFBTyxBQUNWO0FBekJEIiwiZmlsZSI6ImNyZWF0ZVN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2tob2EvOUZ1cnkvUmVhY3QvbmV4dC1zZXJ2ZXIifQ==