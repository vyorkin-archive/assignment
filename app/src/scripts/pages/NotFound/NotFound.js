import React from 'react';
import DocumentTitle from 'react-document-title';

import './NotFound.css';

export default class NotFound {
  render() {
    return (
      <DocumentTitle title='Страница не найдена'>
        <section className='not-found'>
          <h1>Такой страницы не существует</h1>
        </section>
      </DocumentTitle>
    );
  }
}
