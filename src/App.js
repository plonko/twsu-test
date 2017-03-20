import React, { Component } from 'react';
import Api from './utils/Api';

function countInstances(words, thesauarus) {
  const happyWordsCount = words.filter(function (e) {
      return thesauarus.happy.indexOf(e.toLowerCase()) >= 0;
  }).length;

  const sadWordsCount = words.filter(function (e) {
      return thesauarus.sad.indexOf(e.toLowerCase()) >= 0;
  }).length;

  return [happyWordsCount, sadWordsCount]
}

function Meter(props) {
  const words = props.sentence.match(/\b(\w+)\b/g) || [];
  const thesauarus = props.thesauarus;

  const [happyCount, sadCount] = countInstances(words, thesauarus);
  const sum = happyCount + sadCount;
  const scale = happyCount/sum || 0;

  return <p>{scale}</p>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      thesauarus: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  componentDidMount() {
    Api
      .fetchResults('http://localhost:3000/api/words')
      .then(json => {
        this.setState({ thesauarus: json });
      }).catch(console.log.bind(console));
  }

  render() {
    const sentence = this.state.value;
    return (
      <div>
        <input type="text" placeholder="Enter your text" value={sentence} onChange={this.handleChange} />
        <Meter sentence={sentence} thesauarus={this.state.thesauarus} />
      </div>
    );
  }
}
