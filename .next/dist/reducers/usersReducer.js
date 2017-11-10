'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../actions/types');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_USERS:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJGRVRDSF9VU0VSUyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQTRCLEFBQTVCLEFBRUE7O2tCQUFlLFlBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUNyQzs7VUFBUSxPQUFPLEFBQWYsQUFDRTtBQUFLLEFBQUwsQUFDQTtjQUFRLEFBQVIsSUFBWSxPQUFPLEFBQVAsUUFBZSxBQUEzQixBQUNFO2FBQU8sT0FBTyxBQUFQLFFBQWUsQUFBdEIsQUFDRjtBQUNFO2FBQU8sQUFBUCxBQUxKLEFBT0Q7O0FBUkQiLCJmaWxlIjoidXNlcnNSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2tob2EvOUZ1cnkvUmVhY3QvbmV4dC1zZXJ2ZXIifQ==