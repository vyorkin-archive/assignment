import React from 'react';
import DocumentTitle from 'react-document-title';

import './NotFound.css';

export default class NotFound {
  render() {
    return (
      <DocumentTitle title='Not found'>
        <section className='not-found'>
          <h1>Not found</h1>
        </section>
      </DocumentTitle>
    );
  }
}
