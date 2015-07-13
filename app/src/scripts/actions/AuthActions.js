import alt from '../lib/alt';
import auth from '../lib/auth';

class AuthActions {
  constructor() {
    this.generateActions('receivePasscode');
  }

  signIn(form) {
    return auth.signIn(form);
  }

  signOut() {
    auth.signOut();
  }
}

export default alt.createActions(AuthActions);
