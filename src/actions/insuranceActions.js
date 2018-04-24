import * as types from './actionTypes';
import insuranceApi from '../api/mockInsuranceApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadInsurancesSuccess(insurances) {
  return  { type: types.LOAD_INSURANCES_SUCCESS, insurances};
}

export function updateInsuranceSuccess(insurance) {
  return  { type: types.UPDATE_INSURANCES_SUCCESS, insurance};
}

export function createInsuranceSuccess(insurance) {
  return  { type: types.CREATE_INSURANCES_SUCCESS, insurance};
}

export function deleteInsuranceSuccess(insuranceId) {
  return { type: types.DELETE_INSURANCES_SUCCESS, insuranceId};
}

export function loadInsurances() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return insuranceApi.getAllInsurances().then(insurances => {
      dispatch(loadInsurancesSuccess(insurances));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveInsurance(insurance) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return insuranceApi.saveInsurance(insurance).then(savedInsurance => {
      insurance.id ? dispatch(updateInsuranceSuccess(savedInsurance)) : dispatch(createInsuranceSuccess(savedInsurance));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function deleteInsurance(insuranceId) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return insuranceApi.deleteInsurance(insuranceId).then(() => {
      dispatch(deleteInsuranceSuccess(insuranceId));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
