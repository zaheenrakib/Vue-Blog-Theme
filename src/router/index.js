import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import Layout from '@/layout/Layout.vue'
import HomeView from '../views/HomeView.vue'
import BlogList from '@/views/BlogList.vue'
import BlogDetails from '@/components/BlogPost/BlogDetails.vue'


const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/blog',
        name: 'blog',
        component: BlogList,
      },
      {
        path: '/blog/:id',
        name: 'blog-details',
        component: BlogDetails,
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
