import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../src/components/App';
import Scale from '../src/components/Scale';

describe('<App/>', function () {
  // Component
  const wrapper = shallow(<App />);

  // Tests
  it('should exist', function () {
    expect(wrapper).to.have.length(1);
  });

  it('should render one <Scale /> component', function () {
    expect(wrapper.find(Scale)).to.have.length(1);
  });

  it('should render an `input` of type `text`', function () {
    expect(wrapper.find('input[type="text"]')).to.have.length(1);
  });

  it('should have a state of `value`, with the value `empty string`', function () {
    expect(wrapper.state('value')).to.equal('');
  });

  it('should have a state of `thesauarus`, with the value `empty object`', function () {
    const stateThesauarus = wrapper.state('thesauarus');
    const expected = Object.keys({}).length === 0 && {}.constructor === Object;
    const actual = Object.keys(stateThesauarus).length === 0 && stateThesauarus.constructor === Object;

    expect(expected).to.equal(actual);
  });
});