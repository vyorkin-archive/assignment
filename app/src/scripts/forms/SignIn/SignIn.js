import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import auth from '../../lib/auth';

import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';

import Notification from '../../components/Notification';

import Form from '../Form';

import './SignIn.css';

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

  render() {
    return (
      <div>
        <Notification isActive={this.props.passcode}>
          <div className='passcode'>
            <span className='passcode__title'>код доступа:</span>
            <span className='passcode__value'>{this.props.passcode}</span>
          </div>
        </Notification>
        <Form onSubmit={::this.handleSubmit}>
          <div className='form__body'>
            <input ref='phone' name='phone'
              type='text' placeholder='Телефон'
              className='input' required />
            <input ref='passcode' name='passcode'
              type='password' placeholder='Код доступа'
              className='input' required />
          </div>
          <div className='form__footer'>
            <a className='link link--success'
              onClick={::this.requestPasscode}>
              Отправить код
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
        </Form>
      </div>
    );
  }

  requestPasscode() {
    const phone = this.refs.phone.getDOMNode().value;
    AuthStore.requestPasscode(phone);
  }

  handleSubmit(form) {
    AuthActions.signIn(form);
  }
}
