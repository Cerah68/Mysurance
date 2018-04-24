import expect from 'expect';
import * as actions from '../actions/insuranceActions';
import insuranceReducer from './insuranceReducer';

describe('Insurance Reducer', () => {

  it('should add insurance when passed CREATE_INSURANCES_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Test'
      }
    ];

    const newInsurance = {id: 2};

    const action = actions.createInsuranceSuccess(newInsurance);

    //act
    const newState = insuranceReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(2);
    expect(newState[0].id).toEqual(1);
    expect(newState[1].id).toEqual(2);
  });

  it('should delete insurance when passed DELETE_INSURANCES_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Test'
      },
      {
        id: 2,
        title: 'Test 2'
      }
    ];
    const action = actions.deleteInsuranceSuccess(1);

    //act
    const newState = insuranceReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(1);
    expect(newState[0].id).toEqual(2);
  });

});
