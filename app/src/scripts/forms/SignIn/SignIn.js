import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import auth from '../../lib/auth';

import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';

import Notification from '../../components/Notification';

import Form from '../Form';

import './SignIn.css';

import './styles/controls.css';
import './styles/passcode.css';

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
              data-validations='isMobilePhone:"ru-RU"'
              data-error='Должен быть в формате +79XXXXXX'
              className='input' required />
            <input ref='passcode' name='passcode'
              type='password' placeholder='Код доступа'
              data-validations='isAlphanumeric,isLowercase'
              data-error='Буквы или цифры в нижем регистре'
              className='input' required />
          </div>
          <div className='form__footer'>
            <a className='link link--success'
              onClick={::this.requestPasscode}>
              Отправить код
            </a>
            <div className='form__controls'>
              <div className='checkbox checkbox--secure'>
                <input type='checkbox' id='sign-in-secure' className='checkbox__input' />
                <label htmlFor='sign-in-secure' className='checkbox__label' >
                  Чужой компьютер
                </label>
              </div>
              <button type='submit'
                className='button button--success button--signin'>
                Войти
              </button>
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
