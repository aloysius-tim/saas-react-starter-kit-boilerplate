import {CONST} from "../../env";
import fetch from "../../tools/fetch";

var jwtDecode = require('jwt-decode');
import history from '../history.js'

export default class AuthService {
  constructor() {
    this.domain = CONST.apiUrl;
    this.login = this.login.bind(this);
    AuthService.getProfile = AuthService.getProfile.bind(this);
  }

  *login(email, password) {
    const data = yield fetch(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });
    AuthService.setToken(data.token);
    const decodedToken = jwtDecode(data.token);

    const profile = yield fetch(`${this.domain}/auth/me`, {
      method: 'GET'
    });
    AuthService.setProfile(profile);

    return {
      ...data,
      ...decodedToken,
      ...profile
    }
  }

  static loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = AuthService.getToken();

    if (!token)
      return false;

    const decodedToken = jwtDecode(token);
    let dateNow = new Date();

    return decodedToken.exp <= dateNow.getTime();
  }

  static setProfile(user){
    // Saves profile data to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', JSON.stringify(user.role));
    localStorage.setItem('onboarded', JSON.stringify(user.onboarded));
  }

  static getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('user');
    return profile ? JSON.parse(localStorage.user) : {}
  }

  static getRole() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('user');
    return profile ? JSON.parse(localStorage.user).role : 'not-connected'
  }


  static setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('token', idToken);
  }

  static getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }

  static logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('onboarded');
    history.push('/auth/login');
  }
}
