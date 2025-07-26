import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import Layout from '@/layout/Layout.vue'
import HomeView from '@/views/HomeView.vue'
import BlogList from '@/views/BlogList.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import BlogDetails from '@/components/BlogPost/BlogDetails.vue'
import AddBlogPost from '@/components/BlogPost/AddBlogPost.vue'


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
      },
      {
        path: '/add-blog', 
        name: 'add-blog',
        component: AddBlogPost,
      },
      {
        path: "/login",
        name: "login",
        component: LoginView,
      },
      {
        path: "/signup",
        name: "signup",
        component: SignUpView
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
