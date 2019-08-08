import fetchUrl from '../../tools/fetch';
import history from '../history';
import config from '../config';

const jwtDecode = require('jwt-decode');

export default class AuthService {
  constructor() {
    this.domain = config.api.serverUrl;
    this.login = this.login.bind(this);
  }

  *login(email, password) {
    const data = yield fetchUrl(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    AuthService.setToken(data.token);
    return data;
  }

  *signup(email, password, name) {
    const data = yield fetchUrl(`${this.domain}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    AuthService.setToken(data.token);
    return data;
  }

  static getAuthProvider() {
    return config.auth.providers;
  }

  async fetchUser() {
    return fetchUrl(`${this.domain}/auth/me`, {
      method: 'GET',
    });
  }

  static async updateToken() {
    const data = await fetchUrl(`${config.api.serverUrl}/auth/me/refresh`, {
      method: 'GET',
    });
    AuthService.setToken(data.token);
    return data;
  }

  /**
   * Redirect to his domain (member / admin / superadmin...) the user if connected
   */
  static redirectUser() {
    let jwt;
    // eslint-disable-next-line no-cond-assign
    if ((jwt = AuthService.loggedIn())) {
      // eslint-disable-next-line prefer-destructuring
      const user = jwt.data.user;

      switch (user.role) {
        case 'admin':
        case 'superadmin':
          return history.push('/admin');
        case 'member':
          return history.push('/member');
        default:
          AuthService.logout();
          return history.push('/auth/login');
      }
    } else {
      AuthService.logout();
      return history.push('/auth/login');
    }
  }

  static loggedIn() {
    try {
      // Checks if there is a saved token and it's still valid
      const token = AuthService.getToken();

      if (!token) {
        return false;
      }

      const decodedToken = jwtDecode(token);
      const dateNow = new Date();

      if (decodedToken.exp * 1000 <= dateNow.getTime()) return false;
      return decodedToken;
    } catch (e) {
      localStorage.removeItem('token');
      return false;
    }
  }

  static setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('token', idToken);
  }

  static getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }

  static logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
    history.push('/auth/login');
  }

  static *resetPassword(payload) {
    return yield fetchUrl(`${config.api.serverUrl}/auth/forgot/password`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
      }),
    });
  }
}
