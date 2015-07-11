import alt from '../lib/alt';
import api from '../lib/api';

class AuthActions {
  constructor() {
    this.generateActions('receivePasscode', 'signIn');
  }

  requestPasscode(phone) {
    return api.get('passcode', { phone })
      .then(this.actions.receivePasscode);
  }

  signIn(phone, passcode) {
    return api.post('sign-in', { phone, passcode });
  }
}

export default alt.createActions(AuthActions);
