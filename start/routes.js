'use strict'

const Route = use('Route')

// Route.get('/', ({ request }) => {
//   return { message: 'Welcome to Adonis API Starter' }
// }).as('home')

Route.group(use('App/Routes/Auth')).prefix('api/auth')
Route.group(use('App/Routes/Profile')).prefix('api/profile')
Route.group(use('App/Routes/Logs')).prefix('api/logs').middleware('jwtAuth')

Route.any('/', ({ view }) => view.render('frontend/vuejs')).as('app')
Route.any('/quasar', ({ view }) => view.render('frontend/quasar')).as('quasar')

// 404 page not found
Route.any('*', ({ response, view }) => {
    return response.status(404).send( view.render('notify', { message: 'Page Not Found', type: 'danger' }) ) 
})


