import React, { Component } from 'react';

function countInstances(words, thesauarus) {
  // Turn object keys into array and return new array with count of words mapped to it
  return Object.keys(thesauarus).map(key => words.filter(word => 
    thesauarus[key].includes(word.toLowerCase())).length);
}

function calcScale(arrayOfNums) {
  const [happyCount, sadCount] = arrayOfNums;
  const sum = happyCount + sadCount;
  const scale = happyCount/sum || 0;
  return scale;
}

const Scale = (props) => {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];
  const thesauarus = props.thesauarus;

  const count = countInstances(words, thesauarus);
  const scale = calcScale(count);

  return <div>{scale}</div>
}

export default Scale;