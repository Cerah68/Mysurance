import expect from 'expect';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InsuranceList from './InsuranceList';

Enzyme.configure({ adapter: new Adapter() });

function setup(insurances, loading) {
  const props = {
    insurances: insurances,
    loading: loading, 
    openModal: () => {},
  };

  return mount(<InsuranceList {...props} />);
}
describe('InsuranceList', () => {
      
  it('renders row when not loading', () => {
     const wrapper = setup([{
      id: 1,
      title: "Test 1",
      yearlyPremium: 1000,
      category: "Agricultural insurance"
    },
    {
        id: 2,
        title: "Test 2",
        yearlyPremium: 500,
        category: "Flood insurance"
    }],
    false);
    expect(wrapper.find('tbody tr').length).toBe(2);
  });

  it('renders no data when there are no insurances', () => {
    const wrapper = setup([], false);
    expect(wrapper.find('#noDataRow').length).toBe(1);
    expect(wrapper.find('#noDataRow').text()).toEqual('You have no insurances');
  });

  it('renders loading row when loading', () => {
    const wrapper = setup([], true);
    expect(wrapper.find('#loadingRow').length).toBe(1);
  });

  it('sum total of yearly premium', () => {
    const wrapper = setup([{
      id: 1,
      title: "Test 1",
      yearlyPremium: 1000,
      category: "Agricultural insurance"
    },
    {
        id: 2,
        title: "Test 2",
        yearlyPremium: 500,
        category: "Flood insurance"
    }],
    false);
    expect(wrapper.find('tfoot tr th').last().text()).toEqual('1500');
  });

  it('sum is empty when is loading', () => {
    const wrapper = setup([],true);
    expect(wrapper.find('tfoot tr th').last().text()).toBe("");
  });

  it('sum is empty when no insurances', () => {
    const wrapper = setup([],false);
    expect(wrapper.find('tfoot tr th').last().text()).toBe("");
  });
});