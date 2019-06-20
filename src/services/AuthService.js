import {CONST} from "../../env";

var jwtDecode = require('jwt-decode');

export default class AuthService {
  constructor() {
    this.domain = CONST.apiUrl;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  *login(email, password) {
    const data = yield this.fetch(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });
    this.setToken(data.token);
    const decodedToken = jwtDecode(data.token);

    const profile = yield this.fetch(`${this.domain}/auth/me`, {
      method: 'GET'
    });
    this.setProfile(profile);

    return {
      ...data,
      ...decodedToken,
      ...profile
    }
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();

    if (!token)
      return false;

    const decodedToken = jwtDecode(token);
    let dateNow = new Date();

    return decodedToken.exp <= dateNow.getTime();
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('role', JSON.stringify(profile.role));
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  getRole() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile).role : 'not-connected'
  }


  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('token', idToken);
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(url, options){
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }
}
