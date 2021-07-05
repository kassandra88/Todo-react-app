import React, { Component } from 'react';
import './AddItemForm.css';

export default class AddItemForm extends Component {
  state = {
    label: '',
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };
  render() {
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done "
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button type="button" className="btn btn-outline-secondary big">
          Add Item
        </button>
      </form>
    );
  }
}
