import axios from 'axios';

import { FETCHING, SUCCESS, FAILURE } from './actionTypes';

export const getEm = url => dispatch => {
  dispatch({ type: FETCHING });

  axios.get(url)
    .then(({ data }) => dispatch({
      type: SUCCESS,
      chars: data.results,
      curr: data.results.length,
      total: data.count,
      url: data.next
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err.message
    }));
};
