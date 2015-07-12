import api from '../lib/api';
import AuthActions from '../actions/AuthActions';

export default {
  requestPasscode: {
    remote: (_, phone) => api.get('passcode', { phone }),
    success: AuthActions.receivePasscode
  }
};
