import alt from '../lib/alt';
import api from '../lib/api';

class AuthActions {
  constructor() {
    this.generateActions('receivePasscode');
  }

  signIn(phone, passcode) {
    let form = new FormData();
    form.append('phone', phone);
    form.append('passcode', passcode);
    return api.post('sign-in', form);
  }
}

export default alt.createActions(AuthActions);
