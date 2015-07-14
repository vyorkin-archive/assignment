import React from 'react';
import DocumentTitle from 'react-document-title';

export default class NotFound {
  render() {
    return (
      <DocumentTitle title='Страница не найдена'>
        <section className='page'>
          <h1>Такой страницы не существует</h1>
        </section>
      </DocumentTitle>
    );
  }
}
