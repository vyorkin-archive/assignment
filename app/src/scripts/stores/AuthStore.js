import alt from '../lib/alt';
import makeHot from 'alt/utils/makeHot';
import { datasource } from 'alt/utils/decorators';

import AuthActions from '../actions/AuthActions';
import AuthSource from '../sources/AuthSource';

@datasource(AuthSource)
class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.passcode = '';
  }

  onReceivePasscode({ passcode }) {
    this.setState({ passcode });
  }
}

export default makeHot(alt, AuthStore);
