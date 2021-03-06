import Router from 'react-router';
import api from './api';

class Auth {
  attemptedTransition = null;

  signIn(form) {
    api.post('sign-in', form).then((data) => {
      // woooot? (% we should use smth like JWT
      const fakeToken = Math.random().toString(36).substring(7);

      localStorage.setItem('token', fakeToken);
      localStorage.setItem('currentUser', JSON.stringify(data));

      const transition = this.attemptedTransition;
      if (transition) {
        this.attemptedTransition = null;
        transition.retry();
      } else {
        Router.replaceWith('index');
      }
    }).catch(({ status, message }) => {
      console.log(`Unable to sign-in: ${status} - ${message}`);
    });
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  currentUser() {
    const user = localStorage.getItem('currentUser');
    return user && JSON.parse(user);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

export default new Auth();
