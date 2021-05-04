import PublicLayout from '@layouts/PublicLayout';
import PrivateLayout from '@layouts/PrivateLayout';

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home'),
    name: 'home',
    meta: { layout: PrivateLayout, requireAuth: true }
  },
  {
    path: '/login',
    component: () => import('../pages/Login'),
    name: 'login',
    meta: { layout: PublicLayout, guest: true }
  },
  {
    path: '/register',
    component: () => import('../pages/Register'),
    name: 'register',
    meta: { layout: PublicLayout, guest: true }
  }
]

export default routes;