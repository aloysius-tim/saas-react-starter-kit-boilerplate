'use strict'

const Route = use('Route')

module.exports = () => {
  Route.post('authorise', 'AuthController.authorise').validator('auth/Authorise')
  Route.post('signup', 'AuthController.signup').validator('auth/Signup')
  
  Route.post('resend/email/verification/code', 'AuthController.resendEmailVerificationCode')
  Route.get('confirm/email/:token', 'AuthController.confirmEmail')
  
  Route.post('forgot/password', 'AuthController.forgotPassword').validator('auth/Forgot')
  Route.post('reset/password', 'AuthController.resetPassword').as('auth.reset.password')

  Route.post('refresh/token', 'AuthController.refreshToken')
  Route.get('revoke/token', 'AuthController.revokeToken').middleware('jwtAuth')

  Route.get('remove/user/:id', 'AuthController.removeUser').middleware('jwtAuthSuperAdmin')
  
  Route.post('update/email', 'AuthController.updateEmail').middleware('jwtAuth').as('auth.update.email')
  Route.post('update/password', 'AuthController.updatePassword').middleware('jwtAuth').as('auth.update.password')
  Route.get('me', 'AuthController.me').middleware('jwtAuth')
  Route.get('my/tokens', 'AuthController.myTokens').middleware('jwtAuth')
  
  Route.post('assign/role', 'AuthController.assignRole').middleware('jwtAuthSuperAdmin')
  Route.get('toggle/user/ban/:id', 'AuthController.toggleUserBan').middleware('jwtAuthSuperAdmin')
  Route.get('users', 'AuthController.users').middleware('jwtAuthManager')
  
  /*  #######  Pages with view  ######### */
  Route.get('view/confirm/email/:token', 'AuthController.confirmEmailRender').as('auth.confirm.email')
  Route.get('view/reset/password/:token', 'AuthController.resetPasswordForm').as('auth.reset.password.form')
  
}


  