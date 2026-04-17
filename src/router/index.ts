
import { authRoutes } from '@/modules/auth/router'
import LayoutMain from '@/modules/main/layouts/LayoutMain.vue'
import HomeView from '@/modules/main/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: 'home',
    component: LayoutMain,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: ()=>import('@/modules/main/views/AboutView.vue') 
      },
      {
        path: 'contact',
        name: 'contact',
        component: ()=>import('@/modules/main/views/ContactView.vue')
      },
      authRoutes
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router