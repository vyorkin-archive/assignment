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

  ajax(endpoint, method, options) {
    const { params, data: data = null } = options;

    const query = this.queryParams(params);
    const url = `${this.rootUrl}/${endpoint}${query}`;

    return fetch(url, { method: method, body: data })
      .then(this.processResponse);
  }

  queryParams(params) {
    return params ? '?' + Qs.stringify(params) : '';
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject({
          status: response.status,
          message: response.statusText
        });
      }
    });
  }
}

// settings comes from webpack DefinePlugin
export default new Api(settings.apiRoot);
