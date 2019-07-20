/* eslint-disable no-unused-vars */
import fetch from '../../tools/fetch';
import config from '../config';

export default class AuthService {
  constructor() {
    this.domain = config.api.serverUrl;
  }

  *login(email, password) {
    const data = yield fetch(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({}),
    });

    return {};
  }
}
