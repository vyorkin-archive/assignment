import alt from '../lib/alt';
import api from '../lib/api';

class SignUpActions {
  signUp(data) {
    return api.post('sign-up', data);
  }
}

export default alt.createActions(SignInActions);
