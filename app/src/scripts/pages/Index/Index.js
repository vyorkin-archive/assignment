import React from 'react';
import DocumentTitle from 'react-document-title';

import requireAuth from '../../decorators/component/requireAuth';
import Navigation from '../../widgets/Navigation';

import './Index.css';

@requireAuth('sign-in')
export default class Index {
  render() {
    return (
      <DocumentTitle title='Index'>
        <section className='index'>
          <h1>Секретная страница</h1>
          <p>Поздравляю! Ты добрался до секретной страницы c печенькой!</p>
          <img src={require('./cookie.png')} />
          <Navigation />
        </section>
      </DocumentTitle>
    );
  }
}
