'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _types = require('../actions/types');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkZFVENIX0NVUlJFTlRfVVNFUiIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsWUFBK0I7TUFBdEIsQUFBc0IsNEVBQWQsQUFBYztNQUFSLEFBQVEsbUJBQzVDOztVQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUNIO2FBQU8sT0FBQSxBQUFPLFFBQVAsQUFBZSxRQUF0QixBQUE4QixBQUNoQztBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7Ozs7QUFURCxBQUFTLEFBQTBCLEFBRW5DIiwiZmlsZSI6ImF1dGhSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2tob2EvOUZ1cnkvUmVhY3QvbmV4dC1zZXJ2ZXIifQ==