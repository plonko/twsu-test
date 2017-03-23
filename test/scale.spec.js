import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Scale from '../src/components/Scale';
import { Wrapper, Ruler, SadEnd, HappyEnd, MarkerWrapper, Marker } from '../src/styles/scale';

Scale.__Rewire__('SVGImport', () => <p>SVGPlaceholder</p>);

describe('<Scale/>', function () {
  // Props
  const sentence = "I was glad to go to the beach. Very glad. Even though it was a miserable day."
  const thesauarus = {
    happy: ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'],
    sad: ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']
  }

  // Component
  const wrapper = shallow(<Scale sentence={sentence} thesauarus={thesauarus} />);

  // Tests
  it('should exist', function () {
    expect(wrapper).to.have.length(1);
  });

  it('should render a <Wrapper> component', function () {
    expect(wrapper.find(Wrapper)).to.have.length(1);
  });

  it('should have a prop on the instance for sentence', function () {
    expect(wrapper.instance().props.sentence).to.be.defined;
  });

  it('should have a prop on the instance for thesauarus', function () {
    expect(wrapper.instance().props.thesauarus).to.be.defined;
  });

  it(`should have a happiness scale of 66.66666666666666 when given the sentence '${sentence}'`, function () {
    expect(wrapper.find(MarkerWrapper).props().scaleValue).to.equal(66.66666666666666);
  });
});