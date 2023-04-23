import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/business',
    name: 'business',
    component: function () {
      return import('../views/BusinessView.vue')
    }
  },
// {
//   path: '/tech-crunch-articles',
//   name: 'tech-crunch-articles',
//   component: function(){
//     return import('../views/TechCrunchArticlesView.vue')
//   }
// },
// {
//   path: '/us-business-articles',
//   name: 'us-business-articles',
//   component: function(){
//     return import('../views/USBusinessArticlesView.vue')
//   }
// },
// {
//   path: '/tesla-articles',
//   name: 'tesla-articles',
//   component: function(){
//     return import('../views/TeslaArticleView.vue')
//   }
// },
// {
//   path: '/apple-articles',
//   name: 'apple-articles',
//   component: function(){
//     return import('../views/AppleView.vue')
//   }
// }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
