import React from 'react';
import DocumentTitle from 'react-document-title';

import SignUpForm from '../../forms/SignUp';

import './SignUp.css';

export default class SignUp {
  render() {
    return (
      <DocumentTitle title='Регистрация'>
        <section className='sign-up'>
          <h1>Регистрация:</h1>
          <SignUpForm />
        </section>
      </DocumentTitle>
    );
  }
}
