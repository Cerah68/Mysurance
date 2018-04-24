import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCategoriesSuccess(categories) {
  return  { type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return categoryApi.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}
