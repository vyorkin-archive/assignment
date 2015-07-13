import alt from '../lib/alt';
import api from '../lib/api';

class SignUpActions {
  signUp(form) {
    return api.post('sign-up', form);
  }
}

export default alt.createActions(SignUpActions);
