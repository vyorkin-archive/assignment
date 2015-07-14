import React from 'react';
import DocumentTitle from 'react-document-title';

import SignUpForm from '../../forms/SignUp';

export default class SignUp {
  render() {
    return (
      <DocumentTitle title='Регистрация'>
        <section className='page'>
          <h1>Регистрация:</h1>
          <SignUpForm />
        </section>
      </DocumentTitle>
    );
  }
}
