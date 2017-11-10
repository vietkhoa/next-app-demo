'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../actions/types');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2FkbWluUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJGRVRDSF9BRE1JTlMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQTZCLEFBQTdCLEFBRUE7O2tCQUFlLFlBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUNyQzs7VUFBUSxPQUFPLEFBQWYsQUFDRTtBQUFLLEFBQUwsQUFDRTthQUFPLE9BQU8sQUFBUCxRQUFlLEFBQXRCLEFBQ0Y7QUFDRTthQUFPLEFBQVAsQUFKSixBQU1EOztBQVBEIiwiZmlsZSI6ImFkbWluUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9raG9hLzlGdXJ5L1JlYWN0L25leHQtc2VydmVyIn0=