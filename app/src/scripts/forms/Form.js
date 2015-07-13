import React, { PropTypes, Component } from 'react';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'form'
  };

  fields = new Map();

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
    this.props.onSubmit(this.createFormData());
  }

  getValue(element) {
    return this.isCheckbox(element) ? element.checked : element.value;
  }

  createFormData() {
    const formData = new FormData();
    [...this.fields].forEach(([k, v]) => {
      formData.append(k, v);
    });
    return formData;
  }

  isCheckbox(element) {
    return element.getAttribute('type') === 'checkbox';
  }
}
