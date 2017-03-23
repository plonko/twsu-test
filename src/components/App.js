import React, { Component } from 'react';
import Scale from './Scale';
import Api from '../utils/Api';
import { Wrapper, Input, H1, H2 } from '../styles/app';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type your happy or sad text here!',
      thesauarus: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleClick(e) {
    // Select all text on click
    e.target.setSelectionRange(0, e.target.value.length)
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
      <Wrapper>
        <H1>The TWSU Happiness-O-Meter</H1>
        <Input type="text" innerRef={(input) => { this.textInput = input; }} placeholder="Enter your text" value={sentence} onChange={this.handleChange} onClick={this.handleClick}/>
        <H2>As you type our amazing machines will analyse how happy or sad your text is!</H2>
        <Scale sentence={sentence} thesauarus={this.state.thesauarus} />
      </Wrapper>
    );
  }
}
