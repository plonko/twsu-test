import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, Ruler, SadEnd, HappyEnd, MarkerWrapper, Marker } from '../styles/scale';
import { H2 } from '../styles/app';

function countInstances(words, thesauarus) {
  // Turn object keys into array and return new array with count of words mapped to it
  return Object.keys(thesauarus).map(key => words.filter(word =>
    thesauarus[key].includes(word.toLowerCase())).length);
}

function calcScale(arrayOfNums) {
  const [happyCount, sadCount] = arrayOfNums;
  const sum = happyCount + sadCount;
  const scale = happyCount/sum || 0;
  return scale*100;
}

function calcMessage(scaleValue) {
  if(scaleValue < 50) {
    return 'sad, aw..';
  } else if(scaleValue > 50) {
    return 'happy, yay!';
  } else {
    return 'unknown..hmm..';
  }
}

const Scale = (props) => {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];
  const thesauarus = props.thesauarus;

  const count = countInstances(words, thesauarus);
  const scaleValue = calcScale(count);
  const messageValue = calcMessage(scaleValue);

  return (
    <Wrapper>
      <SadEnd scaleValue={scaleValue}/>
      <HappyEnd scaleValue={scaleValue}/>
      <Ruler />
      <MarkerWrapper scaleValue={scaleValue}>
        <Marker></Marker>
      </MarkerWrapper>
      <H2>Your text is {messageValue}</H2>
    </Wrapper>
  )
}

export default Scale;