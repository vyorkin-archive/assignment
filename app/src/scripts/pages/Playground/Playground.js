import React from 'react';
import DocumentTitle from 'react-document-title';

import './Playground.css';

export default class Playground {
  render() {
    return (
      <DocumentTitle title='Эксперименты'>
        <section className='playground'>
          <h1>Эксперименты</h1>
        </section>
      </DocumentTitle>
    );
  }
}
