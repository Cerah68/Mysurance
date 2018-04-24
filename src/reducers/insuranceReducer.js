import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function insuranceReducer(state = initialState.insurances, action) {
  switch(action.type) {
    case types.LOAD_INSURANCES_SUCCESS:
      return action.insurances;
    case types.CREATE_INSURANCES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.insurance)
      ];
    case types.UPDATE_INSURANCES_SUCCESS:
      return [
        ...state.filter(insurance => insurance.id !== action.insurance.id),
        Object.assign({}, action.insurance)
      ];
    case types.DELETE_INSURANCES_SUCCESS:
      return [...state.filter(insurance => insurance.id !== action.insuranceId)];
    default:
      return state;
  }
}
