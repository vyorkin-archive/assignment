import React from 'react';

import './Header.css';

export default class Header {
  render() {
    return (
      <header className='header'>
        <div className='container header__content'>
          <h1 className='header__title'>
            PROTECT<span className='header__highlight'>IM</span>
          </h1>
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
