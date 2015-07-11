import api from '../lib/api';
import CityActions from '../actions/CityActions';

export default {
  fetch: {
    remote(_state, country, query = '') {
      return api.get(`countries/${country}/cities`, { query });
    },

    loading: CityActions.fetch,
    success: CityActions.load
  }
};
