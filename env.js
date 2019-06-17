export var CONST = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

if (process.env.NODE_ENV === 'production') {
  CONST = {
    production: true,
    apiUrl: 'https://beemmo.fr/api',
  };
}

//import {CONST} from '../../env'

