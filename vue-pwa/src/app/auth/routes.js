import components from './components'

export default [
  {
    path: '/',
    component: () => import('@/layouts/guest'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: components.Login,
        meta: { guest: true }
      }, {
        path: '/signup',
        name: 'signup',
        component: components.Signup,
        meta: {
          guest: true
        }
      }, {
        path: '/forgot/password',
        name: 'forgot-password',
        component: components.ForgotPassword,
        meta: {
          guest: true
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: '/update/password',
        name: 'update-password',
        component: components.UpdatePassword,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/update/email',
        name: 'update-email',
        component: components.UpdateEmail,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]
