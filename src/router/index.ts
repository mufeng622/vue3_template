import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

