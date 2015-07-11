import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SignInForm extends Component {
  state = { errors: {} }

  render() {
    return (
      <div className='form'>
        <form onSubmit={::this.submit} className='form__body'>
          <input type='text' placeholder='Телефон' className='input' />
          <input type='password' placeholder='Код доступа' className='input' />
        </form>
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
      </div>
    );
  }

  requestPasscode() {
    console.log('passcode requested');
  }

  validate() {
    return this.state.errors.size === 0;
  }

  submit(e) {
    if (validate()) {
      console.log('form is valid');
    }
    e.preventDefault();
  }
}
