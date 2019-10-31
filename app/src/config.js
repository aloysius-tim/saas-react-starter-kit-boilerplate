/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import stripeDev from './config/stripe.dev';
import stripeProd from './config/stripe.prod';
import auth from './config/auth';

/* eslint-disable max-len */
// eslint-disable-next-line import/no-mutable-exports
let CONST = {
  stripe: stripeDev,
  auth,
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || 'http://localhost:3333/api',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || 'http://localhost:3333/api',
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  production: false,
};

if (process.env.NODE_ENV === 'production') {
  CONST = {
    stripe: stripeProd,
    auth,
    // Node.js app
    port: process.env.PORT || 3000,

    // https://expressjs.com/en/guide/behind-proxies.html
    trustProxy: process.env.TRUST_PROXY || 'loopback',

    api: {
      // API URL to be used in the client-side code
      clientUrl: process.env.API_CLIENT_URL || 'https://api.saastr.0x0.run/api',
      // API URL to be used in the server-side code
      serverUrl: process.env.API_SERVER_URL || 'https://api.saastr.0x0.run/api',
    },

    // Database
    databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

    // Web analytics
    analytics: {
      // https://analytics.google.com/
      googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
    },

    production: true,
    apiUrl: 'https://api.saastr.0x0.run/api',
  };
}

export default CONST;
