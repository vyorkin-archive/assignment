import api from '../lib/api';
import GeoActions from '../actions/GeoActions';

export default {
  fetchCountries: {
    remote() {
      return api.get('countries');
    },
    success: GeoActions.loadCountries
  },
  fetchCities: {
    remote(_state, country, query = '') {
      return api.get(`countries/${country}/cities`, { query });
    },
    success: GeoActions.loadCities
  }
};
