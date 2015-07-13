import React, { PropTypes, Component } from 'react';

import validator from 'validator';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'form'
  };

  constructor(props) {
    super(props);
    this.fields = new Map();
    this.state = { errors: new Map() };
  }

  render() {
    return (
      <form
        onSubmit={::this.handleSubmit}
        onChange={::this.handleChange}
        className={this.props.className}>
        {this.props.children}
      </form>
    );
  }

  handleChange(event) {
    const element = event.target;
    const key = element.getAttribute('name');
    this.fields.set(key, this.getValue(element));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.props.onSubmit(this.getFormData());
    }
  }

  validate() {
    return this.state.errors.size === 0;
  }

  getFormData() {
    const formData = new FormData();
    [...this.fields].forEach(([k, v]) => formData.append(k, v));
    return formData;
  }

  getValue(element) {
    return this.isCheckbox(element) ?
      element.checked : element.value;
  }

  isCheckbox(element) {
    return element.getAttribute('type') === 'checkbox';
  }
}
