'use strict'

const Route = use('Route')

 Route.get('/', ({ request }) => {
   return { message: 'Welcome' }
 }).as('home');

Route.group(use('App/Routes/Auth')).prefix('api/auth');
Route.group(use('App/Routes/Profile')).prefix('api/profile');
Route.group(use('App/Routes/Logs')).prefix('api/logs').middleware('jwtAuth');
Route.group(use('App/Routes/Payment')).prefix('api/payment').middleware('jwtAuth');
Route.group(use('App/Routes/User')).prefix('api/user').middleware('jwtAuth');

// 404 page not found
Route.any('*', ({ response, view }) => {
    return response.status(404).json({
      message: '404 Page not found',
    })
});
