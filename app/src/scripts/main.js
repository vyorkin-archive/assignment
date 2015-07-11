import React from 'react';
import Router from 'react-router';

import appRoutes from './routes/app';

(() => {
  const container = document.createElement('div');
  container.style.height = '100%';
  document.body.appendChild(container);

  Router.run(appRoutes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler/>, container);
  });
}());
