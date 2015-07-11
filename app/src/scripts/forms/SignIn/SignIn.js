import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import auth from '../../lib/auth';
import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';

@connectToStores
export default class SignInForm extends Component {
  static getStores() {
    return [AuthStore];
  }

  static getPropsFromStores() {
    return {
      passcode: AuthStore.getState().passcode
    };
  }

  state = { errors: new Map() }

  render() {
    return (
      <form onSubmit={::this.submit} className='form'>
        <div className='form__body'>
          <input ref='phone' type='text' placeholder='Телефон' className='input' />
          <input ref='passcode' type='password' placeholder='Код доступа' className='input' />
        </div>
        <div className='form__footer'>
            <a className='link link--success'
              onClick={::this.requestPasscode}>
              Выслать пароль
            </a>
            <div className='form__controls clearfix'>
              <div className='form__group pull-left'>
                <div className='checkbox'>
                  <input type='checkbox' id='sign-in-secure' className='checkbox__input' />
                  <label htmlFor='sign-in-secure' className='checkbox__label' >
                    Чужой компьютер
                  </label>
                </div>
              </div>
              <div className='form__group pull-right'>
                <button type='submit' className='button button--submit'>Войти</button>
              </div>
            </div>
        </div>
        <h2>passcode: {this.props.passcode}</h2>
      </form>
    );
  }

  requestPasscode() {
    const phone = this.refs.phone.getDOMNode().value;
    if (phone) {
      AuthStore.requestPasscode(phone);
    }
  }

  validate() {
    return this.state.errors.size === 0;
  }

  submit(e) {
    e.preventDefault();

    if (this.validate()) {
      const phone = this.refs.phone.getDOMNode().value;
      const passcode = this.refs.passcode.getDOMNode().value;

      AuthActions.signIn(phone, passcode);
    }
  }
}
