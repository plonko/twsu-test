import React, { Component } from 'react';

function countInstances(words, thesauarus) {
  const happyWordsCount = words.filter(function (e) {
      return thesauarus.happy.indexOf(e.toLowerCase()) >= 0;
  }).length;

  const sadWordsCount = words.filter(function (e) {
      return thesauarus.sad.indexOf(e.toLowerCase()) >= 0;
  }).length;

  return [happyWordsCount, sadWordsCount]
}

const Scale = (props) => {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];
  const thesauarus = props.thesauarus;

  const [happyCount, sadCount] = countInstances(words, thesauarus);
  const sum = happyCount + sadCount;
  const scale = happyCount/sum || 0;

  return <p>{scale}</p>
}

export default Scale;