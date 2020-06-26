import axios from 'axios';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_ALL_USERS_START,
  SET_ALL_USERS
} from '../reducers/loginReducer';

const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

const loginSuccess = userData => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData
  };
};

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

const setAllUsersStart = () => {
  return {
    type: SET_ALL_USERS_START
  };
};

const setAllUsers = data => {
  return {
    type: SET_ALL_USERS,
    payload: data
  };
};

export const getAllUsersData = () => async dispatch => {
  dispatch(setAllUsersStart());

  try {
    const { data } = await axios.get(
      'https://node-app-4fun.herokuapp.com/users/findAll'
    );

    dispatch(setAllUsers(data));
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (login, password) => async dispatch => {
  dispatch(loginStart());

  try {
    const { data } = await axios.post(
      'https://node-app-4fun.herokuapp.com/users/login',
      {
        login,
        password
      }
    );

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
