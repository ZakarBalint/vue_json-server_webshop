import { createRouter, createWebHistory } from 'vue-router'
import ShopVue from '@/views/Shop.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopVue
    },
    {
      path: '/basket',
      name: 'basket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Basket.vue')
    },
    {
      path: '/newitem',
      name: 'newitem',      
      component: () => import('../views/NewItem.vue')
    }
  ]
})

export default router
