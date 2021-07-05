import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onChange(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="search"
        className="search-input"
        onChange={this.onChange}
        value={this.state.term}
      />
    );
  }
}
