import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/App'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/DistrictLevel',
      children: [
        {
          path: '/VillageLevel',
          name: 'VillageLevel',
          component: () => import('@/views/VillageLevel')
        },
        {
          path: '/DistrictLevel',
          name: 'DistrictLevel',
          component: () => import('@/views/DistrictLevel')
        }
      ]
    }
    
  ]
})

export default router;
