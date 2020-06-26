import { combineReducers } from 'redux';
import { personReducer } from './personReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({ personReducer, loginReducer });
