import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/Layout.vue'
import nProgress from 'nprogress'


const routes = [
  {
    path: '/',
    component: Layout,
    children: [

      {
        path: '',
        name: 'home',
        component: HomeView,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

nProgress.configure({
  showSpinner: false,
  speed: 800,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach(() => {
  nProgress.done()
})


export default router
