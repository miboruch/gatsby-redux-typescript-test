import axios from 'axios';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../reducers/personReducer';

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};

const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
};

export const getPersonData = () => async dispatch => {
  dispatch(fetchStart());

  try {
    const { data } = await axios.get('https://randomuser.me/api');

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
