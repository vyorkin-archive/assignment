import React from 'react';

export default class UserProfile {
  render() {
    return (
      <dl>
        <dt>Фамилия:</dt><dd>{this.props.lastName}</dd>
        <dt>Имя:</dt><dd>{this.props.firstName}</dd>
        <dt>Отчество:</dt><dd>{this.props.middleName}</dd>
      </dl>
    );
  }
}
