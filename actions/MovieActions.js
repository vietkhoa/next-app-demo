import {
    GET_CURRENT_MOVIE
} from './types'
import movies from '../datas/movies.json'

export const fetchCurrentMovie = (id) => async (dispatch, getState, api) => {
    const movie = movies.category1[id] || null
    dispatch({
      type: GET_CURRENT_MOVIE,
      payload: movie
    });
  };