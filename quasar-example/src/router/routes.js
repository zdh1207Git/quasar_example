import MainLayout from '../layouts/MainLayout'
import Index from '../pages/Index'
import Play from '../pages/Play'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Index }
    ]
  },
  {
    path: '/play',
    component: MainLayout,
    children: [
      { path: '', component: Play }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
