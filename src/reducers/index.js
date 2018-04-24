import {combineReducers} from 'redux';
import insurances from './insuranceReducer';
import categories from './categoryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  insurances,
  categories,
  ajaxCallsInProgress
});

export default rootReducer;
