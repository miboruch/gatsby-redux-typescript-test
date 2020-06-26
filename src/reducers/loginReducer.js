export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_ALL_USERS_START = 'SET_ALL_USERS_START';
export const SET_ALL_USERS = 'SET_ALL_USERS';

const initialState = {
  loading: false,
  userData: null,
  userError: null,
  allUsers: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        userData: null,
        userError: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        userError: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        userError: action.payload
      };
    case SET_ALL_USERS_START:
      return {
        ...state,
        loading: true,
        allUsers: null
      };
    case SET_ALL_USERS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload
      };
    default:
      return state;
  }
};
