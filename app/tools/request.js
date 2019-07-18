import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // parse response
  return response.json().then(json => ({
    json,
    throwError: true,
  }));
}

// this checks if response had an error and in this case it throws it
function checkException(response) {
  if (response.throwError === true) {
    const error = response.json;
    throw error;
  }

  return response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
/* export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
} */

export default function request(url, method = 'GET', body = {}) {
  const params = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'authorization': 'Bearer ' + CONST.token()
    },
  };
  if (method === 'POST') params.body = JSON.stringify(body);

  return fetch(url, params)
    .then(checkStatus)
    .then(checkException)
    .then(parseJSON);
}
