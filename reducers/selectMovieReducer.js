import {
    GET_CURRENT_MOVIE
} from '../actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_CURRENT_MOVIE:
        return action.payload;
      default:
        return state;
    }
  };
  