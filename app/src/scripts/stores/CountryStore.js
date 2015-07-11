import alt from '../lib/alt';
import makeHot from 'alt/utils/makeHot';
import { datasource } from 'alt/utils/decorators';

import CountryActions from '../actions/CountryActions';
import CountrySource from '../sources/CountrySource';

@datasource(CountrySource)
class CountryStore {
  static displayName = 'CountryStore';

  constructor() {
    this.bindActions(CountryActions);
    this.items = [];
  }

  onFetch() {
    this.setState({ items: [] });
  }

  onLoad(items) {
    this.setState({ items });
  }
}

export default makeHot(alt, CountryStore);
