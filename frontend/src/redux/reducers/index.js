import { combineReducers } from 'redux';
import userReducer from './userReducer';
import toastsReducer from './toastsReducer';

const allReducers = combineReducers({
    user: userReducer,
    toasts: toastsReducer
});

export default allReducers;