import appRoutes from '@/app/routes'

export default [
  {
    path: '/',
    component: () => import('@/layouts/paper'),
    children: [
      {
        path: '',
        name: 'home',
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
