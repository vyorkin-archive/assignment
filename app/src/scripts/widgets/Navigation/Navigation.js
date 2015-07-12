import React from 'react';
import { Link } from 'react-router';

import './Navigation.css';

export default class Navigation {
  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li><Link to='index'>Индекс</Link></li>
          <li><Link to='playground'>Эксперименты</Link></li>
        </ul>
      </nav>
    );
  }
}
