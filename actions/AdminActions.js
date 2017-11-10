import {
    FETCH_ADMINS
} from './types';

export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');
  
    dispatch({
      type: FETCH_ADMINS,
      payload: res
    });
  };