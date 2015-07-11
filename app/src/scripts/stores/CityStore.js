import alt from '../lib/alt';
import makeHot from 'alt/utils/makeHot';
import { datasource } from 'alt/utils/decorators';

import CityActions from '../actions/CityActions';
import CitySource from '../sources/CitySource';

@datasource(CitySource)
class CityStore {
  static displayName = 'CityStore';

  constructor() {
    this.bindActions(CityActions);
    this.items = [];
  }

  onFetch() {
    this.setState({ items: [] });
  }

  onLoad(items) {
    this.setState({ items });
  }
}

export default makeHot(alt, CityStore);

