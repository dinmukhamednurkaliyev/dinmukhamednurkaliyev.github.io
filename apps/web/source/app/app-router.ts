import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/features/home/HomePage.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home', component: HomePage }],
})
