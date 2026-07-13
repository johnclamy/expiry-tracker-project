import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import pageLink from './page-link'

// Import all view components
import HomeView from '../components/views/HomeView.vue'
import AICareerView from '../components/views/AICareerView.vue'
import NewJobsView from '../components/views/NewJobsView.vue'
import AboutView from '../components/views/AboutView.vue'
import ContactView from '../components/views/ContactView.vue'


const routes: RouteRecordRaw[] = [
    { path: pageLink.HOME, component: HomeView },
    { path: pageLink.CAREERS, component: AICareerView },
    { path: pageLink.JOBS, component: NewJobsView },
    { path: pageLink.ABOUT, component: AboutView },
    { path: pageLink.CONTACT, component: ContactView },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router
