'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAdmins = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState, api) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/admins');

            case 2:
              res = _context.sent;

              dispatch({
                type: _types.FETCH_ADMINS,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvQWRtaW5BY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkZFVENIX0FETUlOUyIsImZldGNoQWRtaW5zIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFwaSIsImdldCIsInJlcyIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNJLEFBQ0csQUFFUDs7Ozs7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsY0FBQTtxQkFBQTt3RkFBTSxpQkFBQSxBQUFPLFVBQVAsQUFBaUIsVUFBakIsQUFBMkIsS0FBM0I7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDWCxJQUFBLEFBQUksSUFETyxBQUNYLEFBQVE7O2lCQUFwQjtBQUR1Qiw2QkFHN0I7OztBQUFTLEFBQ0QsQUFDTjt5QkFMMkIsQUFHN0IsQUFBUyxBQUVFO0FBRkYsQUFDUDs7aUJBSjJCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQU47O21DQUFBOzhCQUFBO0FBQUE7QUFBQTtBQUFwQiIsImZpbGUiOiJBZG1pbkFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2hvYS85RnVyeS9SZWFjdC9uZXh0LXNlcnZlciJ9