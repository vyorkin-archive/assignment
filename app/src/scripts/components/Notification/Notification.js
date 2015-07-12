import React, { Component } from 'react';
import classNames from 'classnames';

import './Notification.css';

export default class Notification extends Component {
  static defaultProps = { isActive: false }

  render() {
    const notificationClasses = classNames({
      'notification': true,
      'notification--active': this.props.isActive
    });

    return (
      <div className={notificationClasses}>
        <div className='notification__content'>{this.props.children}</div>
      </div>
    );
  }
}
