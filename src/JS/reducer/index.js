import { combineReducers } from 'redux';
import listReducer from './reducer';


const rootReducer = combineReducers ({listReducer});

export default rootReducer;