import AuthService from '../src/services/AuthService';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(json =>
    // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject({
      status: response.status,
      ok: false,
      statusText: response.statusText,
      body: json,
    }),
  );
};

const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const handleError = () => {
  // eslint-disable-next-line no-console
  console.log(
    'Cannot connect. Please make sure you are connected to internet.',
  );
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    status: 0,
    ok: false,
    statusText:
      'Cannot connect. Please make sure you are connected to internet.',
    body: { message: 'Error' },
  });
};

export default function fetchUrl(url, options) {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (AuthService.loggedIn()) {
    headers.Authorization = `Bearer ${AuthService.getToken()}`;
  }

  return fetch(url, {
    headers,
    ...options,
  })
    .catch(handleError) // handle network issues
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error;
    });
}
