import {CONST} from "../../env";
import fetch from "../../tools/fetch"

export default class AuthService {
  constructor() {
    this.domain = CONST.apiUrl;
  }

  *login(email, password) {
    const data = yield fetch(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({})
    });

    return {}
  }
}
