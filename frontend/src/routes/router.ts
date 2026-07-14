import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import pageLink from './page-link'

// Import all view components
import HomeView from '../components/views/HomeView.vue'
import AboutView from '../components/views/AboutView.vue'


const routes: RouteRecordRaw[] = [
    { path: pageLink.HOME, component: HomeView },
    { path: pageLink.ABOUT, component: AboutView },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router
