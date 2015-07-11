import React from 'react';
import DocumentTitle from 'react-document-title';

import SignInForm from '../../forms/SignIn';

import './SignIn.css';

export default class SignIn {
  render() {
    return (
      <DocumentTitle title='Sign in'>
        <section className='sign-in'>
          <h1>Вход:</h1>
          <SignInForm />
        </section>
      </DocumentTitle>
    );
  }
}
