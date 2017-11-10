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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/khoa/9Fury/React/next-server/pages/_error.js?entry';


var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client');
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;

      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { statusCode: statusCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkVycm9yIiwicHJvcHMiLCJzdGF0dXNDb2RlIiwicmVzIiwiZXJyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQU1WLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUNHLEFBQUssTUFBTCxBQUFXLDJCQUNJLEtBQUEsQUFBSyxNQURwQixBQUMwQixxQ0FIL0IsQUFDRSxBQUdNLEFBR1Q7Ozs7MENBYm9DO1VBQVosQUFBWSxXQUFaLEFBQVk7VUFBUCxBQUFPLFdBQVAsQUFBTyxBQUNuQzs7VUFBTSxhQUFhLE1BQU0sSUFBTixBQUFVLGFBQWEsTUFBTSxJQUFOLEFBQVUsYUFBcEQsQUFBaUUsQUFDakU7YUFBTyxFQUFFLFlBQVQsQUFBTyxBQUNSOzs7OztFQUpnQyxnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJfZXJyb3IuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUva2hvYS85RnVyeS9SZWFjdC9uZXh0LXNlcnZlciJ9