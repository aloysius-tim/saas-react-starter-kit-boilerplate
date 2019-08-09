import fetch from '../../tools/fetch';
import config from '../config';

export default class UserService {
  constructor() {
    this.domain = config.api.serverUrl;
  }

  static async me() {
    // eslint-disable-next-line no-return-await
    return await fetch(`${config.api.serverUrl}/user`, {
      method: 'GET',
    });
  }
}
