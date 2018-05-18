export default {
  Login: () => import('./Login'),
  UpdatePassword: () => import('./UpdatePassword'),
  UpdateEmail: () => import('./UpdateEmail'),
  ForgotPassword: () => import('./ForgotPassword'),
  ResendEmailVerificationCode: () => import('./ResendEmailVerificationCode'),
  Signup: () => import('./Signup')
}
