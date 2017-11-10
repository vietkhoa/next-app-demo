'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCurrentUser = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState, api) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context.sent;

              dispatch({
                type: _types.FETCH_CURRENT_USER,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvQXV0aEFjdGlvbnMuanMiXSwibmFtZXMiOlsiRkVUQ0hfQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJhcGkiLCJnZXQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFDSSxBQUNHLEFBRVA7Ozs7OztBQUFPLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLG1CQUFBO3FCQUFBO3dGQUFNLGlCQUFBLEFBQU8sVUFBUCxBQUFpQixVQUFqQixBQUEyQixLQUEzQjtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNoQixJQUFBLEFBQUksSUFEWSxBQUNoQixBQUFROztpQkFBcEI7QUFENEIsNkJBR2xDOzs7QUFBUyxBQUNELEFBQ047eUJBTGdDLEFBR2xDLEFBQVMsQUFFRTtBQUZGLEFBQ1A7O2lCQUpnQztpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFOOzttQ0FBQTs4QkFBQTtBQUFBO0FBQUE7QUFBekIiLCJmaWxlIjoiQXV0aEFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2hvYS85RnVyeS9SZWFjdC9uZXh0LXNlcnZlciJ9