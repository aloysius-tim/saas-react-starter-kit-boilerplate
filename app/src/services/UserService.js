import { CONST } from '../../env';
import fetch from '../../tools/fetch';

export default class UserService {
  constructor() {
    this.domain = CONST.apiUrl;
  }

  static async onboarded() {
    // eslint-disable-next-line no-return-await
    return await fetch(`${CONST.apiUrl}/user/onboarded`, {
      method: 'GET',
    });
  }

  static async me() {
    // eslint-disable-next-line no-return-await
    return await fetch(`${CONST.apiUrl}/user/me`, {
      method: 'GET',
    });
  }
}
