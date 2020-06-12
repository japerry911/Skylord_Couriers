import { combineReducers } from 'redux';
import userReducer from './userReducer';
import toastsReducer from './toastsReducer';
import shipmentReducer from './shipmentReducer';

const allReducers = combineReducers({
    user: userReducer,
    toasts: toastsReducer,
    shipments: shipmentReducer
});

export default allReducers;