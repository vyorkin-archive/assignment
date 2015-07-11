import api from '../lib/api';
import AuthActions from '../actions/AuthActions';

export default {
  requestPasscode: {
    remote(_state, phone) {
      return api.get('passcode', { phone });
    },
    success: AuthActions.receivePasscode
  }
};
