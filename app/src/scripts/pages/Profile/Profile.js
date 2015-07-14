import React from 'react';
import DocumentTitle from 'react-document-title';

import requireAuth from '../../decorators/component/requireAuth';
import auth from '../../lib/auth';

import UserProfile from '../../widgets/UserProfile';

@requireAuth('sign-in')
export default class Profile {
  render() {
    return (
      <DocumentTitle title='Профиль'>
        <section className='page'>
          <h1>Профиль</h1>
          <UserProfile {...auth.currentUser()} />
        </section>
      </DocumentTitle>
    );
  }
}

