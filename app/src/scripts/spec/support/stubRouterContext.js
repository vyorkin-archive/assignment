import React, { PropTypes } from 'react';
 
export default (Component, props, stubs) => {
  function RouterStub() {}
 
  Object.assign(RouterStub, {
    makePath() {},
    makeHref() {},
    transitionTo() {},
    replaceWith() {},
    goBack() {},
    getCurrentPath() {},
    getCurrentRoutes() {},
    getCurrentPathname() {},
    getCurrentParams() {},
    getCurrentQuery() {},
    isActive() {},
    getRouteAtDepth() {},
    setRouteComponentAtDepth() {}
  }, stubs);
 
  return class Wrapped extends React.Component {
    static childContextTypes = {
      router: PropTypes.func,
      routeDepth: PropTypes.number
    }
 
    getChildContext() {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    }
 
    render() {
      return React.createElement(Component, props);
    }
  }
}
