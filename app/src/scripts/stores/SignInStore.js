import alt from '../lib/alt';
import makeHot from 'alt/utils/makeHot';

import SignInActions from '../actions/SignInActions';

class SignInStore {
  constructor() {
    this.bindActions(SignInActions);
    this.passcode = '';
  }

  onReceivePasscode(passcode) {
    this.setState({ passcode });
  }
}

export default makeHot(alt, SignInStore);
