import AuthService from "../src/services/AuthService";

export default function fetchUrl (url, options) {
  // performs api calls sending the required authentication headers
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (AuthService.loggedIn()){
    headers['Authorization'] = 'Bearer ' + AuthService.getToken();
  }

  return fetch(url, {
    headers,
    ...options
  })
    .then((response) => {
      // raises an error in case response status is not a success
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        console.log('Error in Fetch', response);
        var error = new Error(response.statusText);
        error.response = response;
        throw error
      }
    })
    .then(response => response.json())
}
