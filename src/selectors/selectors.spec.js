import expect from 'expect';
import React from 'react';
import {categoriesFormattedForDropdown} from './selectors';

describe('Categories Selectors', () => {
  describe('categoriesFormattedForDropdown', () => {
    it('should return category data formatted for use in a dropdown', () => {
      const categories = [
        {pageid: 1, title: 'Category:Agricultural insurance'},
        {pageid: 2, title: 'Category:Flood insurance'}
      ];

      const expected = [
        {value: 1, text: 'Agricultural insurance'},
        {value: 2, text: 'Flood insurance'}
      ];

      expect(categoriesFormattedForDropdown(categories)).toEqual(expected);
    });
  });
});

