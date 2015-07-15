import React from 'react';
import Router from 'react-router';
import FastClick from 'fastclick';

import appRoutes from './routes/app';

import '../styles/main.css';

new Promise((resolve) => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => FastClick.attach(document.body))
  .then(() => {
    const container = document.createElement('div');
    container.style.height = '100%';
    document.body.appendChild(container);

    Router.run(appRoutes, Router.HistoryLocation, (Handler) => {
      React.render(<Handler/>, container);
    });
  });
