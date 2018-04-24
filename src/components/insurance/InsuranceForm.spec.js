import expect from 'expect';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InsuranceForm from './InsuranceForm';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    insurance: {},
    categories: [],
    saving: false, 
    errors: {},
    onSave: () => {},
    onChange: () => {},
    onCancel: () => {}
  };

  return mount(<InsuranceForm {...props} />);
}
describe('InsuranceForm', () => {
      
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders 3 form group', () => {
    const wrapper = setup();
    expect(wrapper.find('.form-group').length).toBe(3);
  });
});