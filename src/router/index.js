import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      alias: '/'
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
