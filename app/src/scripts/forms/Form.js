import React, { PropTypes, Component } from 'react';

const validator = require('validator');

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

  componentDidMount() {
  }

  render() {
    return (
      <form
        onSubmit={::this.handleSubmit}
        onChange={::this.handleChange}
        className={this.props.className}>
        {this.renderErrors()}
        {this.props.children}
      </form>
    );
  }

  renderErrors() {
    return (
      <ul>{[...this.state.errors].map(([k, v]) => <li key={k}>{v}</li>)}</ul>
    );
  }

  handleChange(event) {
    const element = event.target;

    const key = element.getAttribute('name');
    const value = this.getValue(element);

    this.validate(element, key, value);
    this.fields.set(key, value);
  }

  validate(element, key, value) {
    const validations = element.dataset.validations || '';
    const errorMessage = element.dataset.error;

    validations.split(',').forEach((validation) => {
      const [method, ...rawArgs] = validation.split(':');
      const args = rawArgs.map(JSON.parse);
      const validatorArgs = [value, ...args];

      const errors = this.state.errors;
      if (validator[method](...validatorArgs)) {
        errors.delete(key);
      } else {
        errors.set(key, errorMessage);
      }
      this.setState({ errors });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.onSubmit(this.getFormData());
    }
  }

  isValid() {
    return this.state.errors.size === 0;
  }

  getFormData() {
    const formData = new FormData();
    [...this.fields].forEach(([k, v]) => formData.append(k, v));
    return formData;
  }

  getValue(element) {
    return this.isCheckbox(element) ? element.checked : element.value;
  }

  isCheckbox(element) {
    return element.getAttribute('type') === 'checkbox';
  }
}
