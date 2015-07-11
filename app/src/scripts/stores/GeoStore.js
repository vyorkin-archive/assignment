import alt from '../lib/alt';
import makeHot from 'alt/utils/makeHot';
import { datasource } from 'alt/utils/decorators';

import GeoSource from '../sources/GeoSource';
import GeoActions from '../actions/GeoActions';

@datasource(GeoSource)
class GeoStore {
  static displayName = 'GeoStore';

  constructor() {
    this.bindActions(GeoActions);
    this.countries = [];
    this.cities = [];
  }

  onLoadCountries(countries) {
    this.setState({ countries });
  }
  onLoadCities(cities) {
    this.setState({ cities });
  }
}

export default makeHot(alt, GeoStore);
