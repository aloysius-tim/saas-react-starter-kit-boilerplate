var jwtDecode = require('jwt-decode');
import {CONST} from "../env";

export default class AuthService {
  constructor() {
    this.domain = CONST.apiUrl;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(email, password) {
    // Get a token
    return this.fetch(`${this.domain}/auth/authorise`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      return this.fetch(`${this.domain}/auth/me`, {
        method: 'GET'
      })
    }).then(res => {
      this.setProfile(res)
      //return Promise.resolve(res)
    })
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
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
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
