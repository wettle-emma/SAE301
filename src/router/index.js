import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import Panier from '../pages/Panier.vue' 
import Personnalisation from '../pages/Personnalisation.vue'
import Compte from '../pages/Compte.vue'
import MapView from '../pages/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/personnalisation',
      name: 'personnalisation',
      component: Personnalisation
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier
    },
    {
      path: '/compte',
      name: 'compte',
      component: Compte
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
  ]
})

export default router
