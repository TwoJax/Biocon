import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SideAView from '../views/SideAView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/side_a',
    name: 'side_a',
    component: SideAView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
