import components from './components'

export default [
  {
    path: '/',
    component: () => import('layouts/guest'),
    children: [{ path: '/login', name: 'login', component: components.Login, meta: { guest: true } }]
  }
]
