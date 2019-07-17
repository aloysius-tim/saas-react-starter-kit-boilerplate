'use strict'

const Server = use('Server')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| Global middleware are executed on each http request only when the routes
| match.
|
*/
const globalMiddleware = [
  'Adonis/Middleware/BodyParser'
]

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
|
| Named middleware is key/value object to conditionally add middleware on
| specific routes or group of routes.
|
| // define
| {
|   auth: 'Adonis/Middleware/Auth'
| }
|
| // use
| Route.get().middleware('auth')
|
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  jwtAuth: 'App/Middleware/JwtAuth',
  jwtAuthVerified: 'App/Middleware/JwtAuthVerified',
  jwtAuthMember: 'App/Middleware/JwtAuthMember',
  jwtAuthModerator: 'App/Middleware/JwtAuthModerator',
  jwtAuthManager: 'App/Middleware/JwtAuthManager',
  jwtAuthAdmin: 'App/Middleware/JwtAuthAdmin',
  jwtAuthSuperAdmin: 'App/Middleware/JwtAuthSuperAdmin'
}

/*
|--------------------------------------------------------------------------
| Server Middleware
|--------------------------------------------------------------------------
|
| Server levl middleware are executed even when route for a given URL is
| not registered. Features like `static assets` and `cors` needs better
| control over request lifecycle.
|
*/
const serverMiddleware = [
  'Adonis/Middleware/Static',
  'Adonis/Middleware/Cors'
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
