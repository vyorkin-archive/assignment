import React from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header {
  render() {
    return (
      <header className='header'>
        <div className='container header__content'>
          <Link to='index' className='header__title'>
            PROTECT<span className='header__highlight'>IM</span>
          </Link>
          <p className='header__desc'>
            Система СМС-авторизации &mdash; метод борьбы
            с попытками получения несанкционированного
            доступа к различным информационным системам.
          </p>
        </div>
      </header>
    );
  }
}
