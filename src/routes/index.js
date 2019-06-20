/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },

    {
      path: '/auth',
      children: [
        {
          path: '/login',
          load: () => import(/* webpackChunkName: 'login' */ './auth/login'),
        },
        {
          path: '/register',
          load: () => import(/* webpackChunkName: 'register' */ './auth/register'),
        },
      ],
    },

    {
      path: '/member',
      children: [
        {
          path: '',
          load: () => import(/* webpackChunkName: 'dashboard' */ './member/dashboard'),
        },
        {
          path: '/profile',
          load: () => import(/* webpackChunkName: 'profile' */ './member/profile'),
        },
      ],
    },

    {
      path: '/admin',
      children: [
        {
          path: '',
          load: () => import(/* webpackChunkName: 'admin' */ './admin'),
        },
      ],
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './special/not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - sAAsTr`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./special/error').default,
  });
}

export default routes;
