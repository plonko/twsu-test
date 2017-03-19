import React, { Component } from 'react';
import Api from './utils/Api';

const WORDS = {
  happy: ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'],
  sad: ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']
}

function countInstances(words) {
  const happyWordsCount = words.filter(function (e) {
      return WORDS.happy.indexOf(e.toLowerCase()) >= 0;
  }).length;

  const sadWordsCount = words.filter(function (e) {
      return WORDS.sad.indexOf(e.toLowerCase()) >= 0;
  }).length;

  return [happyWordsCount, sadWordsCount]
}

function Meter(props) {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];

  const [happyCount, sadCount] = countInstances(words);
  const sum = happyCount + sadCount;
  const scale = happyCount/sum || 0;

  return <p>{scale}</p>
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  // componentDidMount() {
  //   Api
  //     .getResults('http://localhost:3000/api/words')
  //     .then(result => {
  //       console.log('res', result)
  //       return result
  //     })
  //     .catch(message => message);
  // }

  render() {
    const sentence = this.state.value;
    return (
      <form>
        <input type="text" placeholder="Enter your text" value={sentence} onChange={this.handleChange} />
        <Meter sentence={sentence} />
      </form>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thesauarus: {
        happy: [
          'delight',
          'delighted',
          'delightful',
          'happy',
          'glad',
          'joy',
          'joyful',
          'merry',
          'pleasant'
        ],
        sad: [
          'disappointed',
          'miserable',
          'sad',
          'sorrow',
          'unhappy'
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.thesauarus.happy[0]}</h1>
        <Input />
      </div>
    );
  }
}

// I was glad to go to the beach. Very glad. Even though it was a miserable day.