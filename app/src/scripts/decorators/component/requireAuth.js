import React from 'react';
import auth from '../../lib/auth';

const requireAuth = (Component, redirectTo = 'sign-in') => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!auth.isAuthenticated()) {
        auth.attemptedTransition = transition;
        return transition.redirect(redirectTo);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

export default (redirectTo) => {
  return (Component) => requireAuth(Component, redirectTo);
};
