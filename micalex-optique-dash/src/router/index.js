import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound/NotFound.vue'
import UserView from '@/views/UserView.vue'
import ArtcileView from '@/views/ArticleView.vue'
import SocieteView from '@/views/SocieteView.vue'
import PortalView from '@/views/PortalView.vue'

import PostarticleView from '@/views/PostarticleView.vue'
import CheckoutView from '@/views/CheckoutView.vue'



const routes = [

  {
    path: '/',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/article',
    name: 'ArticleView',
    component: ArtcileView
  },
  {
    path: '/societe',
    name: 'SocieteView',
    component: SocieteView
  },
  {
    path: '/portal',
    name: 'PortalView',
    component: PortalView
  },
  {
    path: '/postarticle',
    name: 'PostArticleView',
    component: PostarticleView
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
