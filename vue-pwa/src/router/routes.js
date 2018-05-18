import appRoutes from '@/app/routes.js'

export default [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/index'),
        meta: {
          // requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/dashboard'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/pages/index'),
        meta: { requiresAuth: true }
      }
    ]
  },
  ...appRoutes,
  {
    // Always leave this as last one
    path: '*',
    component: () => import('@/pages/error404'),
    template: null
  }
]
