import React, { PropTypes, Component } from 'react';
 
export default (target, props, stubs) => {
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
 
  return class Wrapper extends Component {
    static childContextTypes = {
      router: PropTypes.func,
      routeDepth: PropTypes.number
    }
 
    getChildContext() {
      return { router: RouterStub, routeDepth: 0 };
    }
 
    render() {
      return React.createElement(target, props);
    }
  }
}
