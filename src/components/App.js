import React, { Component } from 'react';
import Scale from './Scale';
import Api from '../utils/Api';
import { Input } from '../styles/app';

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
    this.textInput.focus();
  }

  render() {
    const sentence = this.state.value;
    return (
      <div>
        <Input type="text" innerRef={(input) => { this.textInput = input; }} placeholder="Enter your text" value={sentence} onChange={this.handleChange} />
        <Scale sentence={sentence} thesauarus={this.state.thesauarus} />
      </div>
    );
  }
}
