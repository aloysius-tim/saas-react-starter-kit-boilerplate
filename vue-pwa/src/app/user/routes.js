import components from './components'

export default [
  {
    path: '/user',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: 'profile',
        name: 'user-profile',
        component: components.Profile,
        meta: { requiresAuth: true }
      }
    ],
    meta: { requiresAuth: true }
  }
]
