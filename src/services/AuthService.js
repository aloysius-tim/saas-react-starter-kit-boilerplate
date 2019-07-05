import {CONST} from "../../env";
import fetch from "../../tools/fetch";

var jwtDecode = require('jwt-decode');

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

  static setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('role', JSON.stringify(profile.role));
  }

  static getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  static getRole() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile).role : 'not-connected'
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
    localStorage.removeItem('profile');
    window.location = '/auth/login'
  }
}
