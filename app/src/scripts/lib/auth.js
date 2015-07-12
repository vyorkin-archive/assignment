import Router from 'react-router';
import api from './api';

class Auth {
  attemptedTransition = null;

  getToken() {
    return localStorage.token;
  }

  signIn(phone, passcode) {
    let form = new FormData();
    form.append('phone', phone);
    form.append('passcode', passcode);

    api.post('sign-in', form).then(() => {
      const transition = this.attemptedTransition;
      if (transition) {
        this.attemptedTransition = null;
        transition.retry();
      } else {
        Router.replaceWith('/');
      }
    });
  }

  signOut() {
    delete localStorage.token;
  }

  isAuthenticated() {
    return !!localStorage.token;
  }
}

export default new Auth();
