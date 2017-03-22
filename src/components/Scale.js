import React, { Component } from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  overflow: hidden;
`;

const Ruler = styled.section`
  height: 50px;
  width: 100%;
  background-color: rgb(115,199,192);
  background-image: linear-gradient(to right, rgba(0,0,0,0.25) 6px, transparent 6px), linear-gradient(to right, transparent 12px, rgba(0,0,0,0.25) 12px, rgba(0,0,0,0.25) 14px, transparent 14px, transparent 20px, rgba(0,0,0,0.25) 20px, rgba(0,0,0,0.25) 22px, transparent 22px, transparent 28px, rgba(0,0,0,0.25) 28px, rgba(0,0,0,0.25) 30px, transparent 30px, transparent 36px, rgba(0,0,0,0.25) 36px, rgba(0,0,0,0.25) 38px, transparent 38px);
  background-repeat: repeat-x;
  background-size: 44px 30px, 44px 20px;
  background-position: 8px bottom;
  border-bottom: 2px solid rgba(0,0,0,0.25);
`;

const Title = styled.div`
  font-size: 1.5em;
  color: palevioletred;
  transition: all 300ms;
  transform: translateX(${props => props.scaleValue}%);
  .unicorn {
    width: 8px;
    height: 8px;
    background-size: contain;
    background: red;
  }
`;

const Scale = (props) => {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];
  const thesauarus = props.thesauarus;

  const count = countInstances(words, thesauarus);
  const scaleValue = calcScale(count);

  return (
    <Wrapper>
      <Ruler />
      <Title scaleValue={scaleValue}>
        <div className="unicorn"></div>
      </Title>
    </Wrapper>
  )
}

export default Scale;