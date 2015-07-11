import api from './api';

class Auth {
  getToken() {
    return localStorage.token;
  }

  signIn(phone, passcode) {
    return new Promise((resolve, reject) => {
      if (this.isSignedIn()) {
        resolve(true);
      } else {
        let form = new FormData();
        form.append('phone', phone);
        form.append('passcode', passcode);

        return api.post('sign-in', form);
      }
    });
  }

  signOut() {
    delete localStorage.token;
  }

  isSignedIn() {
    return !!localStorage.token;
  }

  onChange() {
    // TODO: hooy s nim.
  }
}

export default new Auth();
