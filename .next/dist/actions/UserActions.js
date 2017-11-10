'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _types = require('./types');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState, api) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({
                type: _types.FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvVXNlckFjdGlvbnMuanMiXSwibmFtZXMiOlsiRkVUQ0hfVVNFUlMiLCJheGlvcyIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiYXBpIiwiZ2V0IiwicmVzIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQ0ksQUFDRzs7QUFFUCxBQUFPLEFBRVA7Ozs7Ozs7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsYUFBQTtxQkFBQTt3RkFBTSxpQkFBQSxBQUFPLFVBQVAsQUFBaUIsVUFBakIsQUFBMkIsS0FBM0I7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDVixJQUFBLEFBQUksSUFETSxBQUNWLEFBQVE7O2lCQUFwQjtBQURzQiw2QkFFNUI7OztBQUFTLEFBQ0QsQUFDTjt5QkFKMEIsQUFFNUIsQUFBUyxBQUVFO0FBRkYsQUFDUDs7aUJBSDBCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQU47O21DQUFBOzhCQUFBO0FBQUE7QUFBQTtBQUFuQiIsImZpbGUiOiJVc2VyQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9raG9hLzlGdXJ5L1JlYWN0L25leHQtc2VydmVyIn0=