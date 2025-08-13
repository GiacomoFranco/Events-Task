import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'All Events' },
    },
    {
      path: '/all',
      name: 'All Events',
      component: () => import('../views/AllEvents.vue'),
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: () => import('../views/UpcomingEvents.vue'),
    },
    {
      path: '/past-events',
      name: 'Past Events',
      component: () => import('../views/PastEvents.vue'),
    },
    {
      path: '/my-events',
      name: 'My Events',
      component: () => import('../views/MyEvents.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
