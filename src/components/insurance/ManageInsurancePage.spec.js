import expect from 'expect';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ManageInsurancePage } from './ManageInsurancePage';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        categories: [],
        saving: false,
        errors : {},
        actions: {saveCourse: () => {return Promise.resolve();}},
        insurance:{
            id: "",
            title: "",
            yearlyPremium: "",
            category: ""
        }
    };
    return mount(<ManageInsurancePage {...props}/>);
}

describe('ManageInsurancePage', () => {
      
    it('sets error message when trying to save empty title', () => {
        const wrapper = setup();
        const saveButton = wrapper.find('button').first();
        expect(saveButton.prop('type')).toBe('button');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
    });

    it('sets error message when trying to save empty yearly premium', () => {
        const wrapper = setup();
        const saveButton = wrapper.find('button').first();
        expect(saveButton.prop('type')).toBe('button');
        saveButton.simulate('click');
        expect(wrapper.state().errors.yearlyPremium).toBe('Yearly premium cannot be null');
    });

    it('sets error message when trying to save empty category', () => {
        const wrapper = setup();
        const saveButton = wrapper.find('button').first();
        expect(saveButton.prop('type')).toBe('button');
        saveButton.simulate('click');
        expect(wrapper.state().errors.category).toBe('You need to select a category');
    });
});