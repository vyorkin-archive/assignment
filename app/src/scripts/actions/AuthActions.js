import alt from '../lib/alt';
import auth from '../lib/auth';

class AuthActions {
  constructor() {
    this.generateActions('receivePasscode');
  }

  signIn(phone, passcode) {
    const form = new FormData();
    form.append('phone', phone);
    form.append('passcode', passcode);
    return auth.signIn(form);
  }

  signOut() {
    auth.signOut();
  }
}

export default alt.createActions(AuthActions);
