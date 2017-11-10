'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _createStore = require('../../utils/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _Layout = require('../Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/khoa/9Fury/React/next-server/components/hocs/ultimateRoot.js';

exports.default = function (ChildComponent) {
    var UltimateRoot = function (_Component) {
        (0, _inherits3.default)(UltimateRoot, _Component);

        function UltimateRoot() {
            (0, _classCallCheck3.default)(this, UltimateRoot);

            return (0, _possibleConstructorReturn3.default)(this, (UltimateRoot.__proto__ || (0, _getPrototypeOf2.default)(UltimateRoot)).apply(this, arguments));
        }

        (0, _createClass3.default)(UltimateRoot, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_Layout2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement(ChildComponent, (0, _extends3.default)({}, this.props, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                })));
            }
        }], [{
            key: 'getInitialProps',
            value: function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                    var store = _ref.store,
                        isServer = _ref.isServer,
                        req = _ref.req;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!isServer) {
                                        _context.next = 5;
                                        break;
                                    }

                                    if (!(req.path == "/user")) {
                                        _context.next = 5;
                                        break;
                                    }

                                    console.log("dispatch user");
                                    _context.next = 5;
                                    return store.dispatch((0, _actions.fetchUsers)());

                                case 5:
                                    store.dispatch((0, _actions.fetchCurrentUser)());
                                    return _context.abrupt('return', { isServer: isServer });

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getInitialProps(_x) {
                    return _ref2.apply(this, arguments);
                }

                return getInitialProps;
            }()
        }]);

        return UltimateRoot;
    }(_react.Component);

    return (0, _nextReduxWrapper2.default)(_createStore2.default)(UltimateRoot);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9jcy91bHRpbWF0ZVJvb3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiUm91dGVyIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiTGF5T3V0IiwiZmV0Y2hVc2VycyIsImZldGNoQ3VycmVudFVzZXIiLCJVbHRpbWF0ZVJvb3QiLCJwcm9wcyIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJyZXEiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVksQUFBd0IsQUFFN0M7Ozs7OztrQkFBZSwwQkFBa0I7UUFBQSxBQUN2QixxQ0FEdUI7OENBQUE7O2dDQUFBO2dEQUFBOztzSkFBQTtBQUFBOzs7aUJBQUE7cUNBYWhCLEFBQ0w7dUNBQ0ksQUFBQzs7a0NBQUQ7b0NBQUEsQUFDSTtBQURKO0FBQUEsaUJBQUEsZ0NBQ0ksQUFBQywyQ0FBbUIsS0FBcEIsQUFBeUI7O2tDQUF6QjtvQ0FGUixBQUNJLEFBQ0ksQUFHWDtBQUhXO0FBQUE7QUFoQmE7QUFBQTtpQkFBQTsrQkFBQTs0SEFBQTt3QkFBQSxBQUVNLGFBRk4sQUFFTTt3QkFGTixBQUVhLGdCQUZiLEFBRWE7d0JBRmIsQUFFdUIsV0FGdkIsQUFFdUI7a0ZBRnZCO2tDQUFBOzZEQUFBO3FDQUFBO3lDQUFBLEFBR2pCLFVBSGlCO3dEQUFBO0FBQUE7QUFBQTs7MENBSWIsSUFBQSxBQUFJLFFBSlMsQUFJRCxVQUpDO3dEQUFBO0FBQUE7QUFLYjs7NENBQUEsQUFBUSxJQUxLLEFBS2IsQUFBWTtvREFMQzsyQ0FNUCxNQUFBLEFBQU0sU0FOQyxBQU1QLEFBQWU7O3FDQUc3QjswQ0FBQSxBQUFNLFNBVGUsQUFTckIsQUFBZTtxRUFDUixFQUFFLFVBVlksQUFVZDs7cUNBVmM7cUNBQUE7b0RBQUE7O0FBQUE7Z0NBQUE7QUFBQTs7NkNBQUE7NkNBQUE7QUFBQTs7dUJBQUE7QUFBQTtBQUFBOztlQUFBO0FBQUEsQUFDRixBQXFCM0I7O1dBQU8sQUFBVSx1REFBakIsQUFBTyxBQUFxQixBQUMvQjtBQXZCRCIsImZpbGUiOiJ1bHRpbWF0ZVJvb3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2hvYS85RnVyeS9SZWFjdC9uZXh0LXNlcnZlciJ9