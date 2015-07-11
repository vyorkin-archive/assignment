import api from '../lib/api';
import CountryActions from '../actions/CountryActions';

export default {
  fetch: {
    remote() {
      return api.get('countries');
    },

    loading: CountryActions.fetch,
    success: CountryActions.load
  }
};
