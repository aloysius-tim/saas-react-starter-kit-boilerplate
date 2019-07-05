export var CONST = {
  production: false,
  apiUrl: 'http://127.0.0.1:3333/api',
};

if (process.env.NODE_ENV === 'production') {
  CONST = {
    production: true,
    apiUrl: 'https://0x0.run/api',
  };
}

//import {CONST} from '../../env'

