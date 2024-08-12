import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/Recommend/Recommend.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order/Order.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message/Message.vue')
  },
  {
    path: '/location-selector',
    name: 'location-selector',
    component: () => import('../views/LocationSelector/LocationSelector.vue'),
    meta: {
      hideTabBar: true
    }
  },
  {
    path: '/search-result',
    name: 'search-result',
    component: () => import('../views/SearchResult/SearchResult.vue'),
    meta: {
      hideTabBar: true
    }
  },
  {
    path: '/room-detail/:id',
    name: 'room-detail',
    component: () => import('../views/RoomDetail/RoomDetail.vue'),
    meta: {
      hideTabBar: true
    }
  }
  ]
})

export default router
