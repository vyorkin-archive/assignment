import 'whatwg-fetch';
import Qs from 'qs';

class Api {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  get(endpoint, params = {}) {
    return this.ajax(endpoint, 'get', { params });
  }

  post(endpoint, data) {
    return this.ajax(endpoint, 'post', { data });
  }

  async ajax(endpoint, method, options) {
    const { params, data: data = {} } = options;

    const query = this.queryParams(params);
    const url = `${this.rootUrl}/${endpoint}${query}`;

    try {
      const response = await fetch(url, {
        method: method,
        body: data
      });
      return await response.json();
    } catch (err) {
      console.log('AJAX error: ', err);
    }
  }

  queryParams(params) {
    return params ? '?' + Qs.stringify(params) : '';
  }
}

// settings comes from webpack DefinePlugin
export default new Api(settings.apiRoot);
