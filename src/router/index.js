import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import DAOView from '@/views/DAOView'
import PicksView from '@/views/PicksView'
import RugRadarView from '@/views/RugRadarView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/dao',
    name: 'DAOView',
    component: DAOView
  },
  {
    path: '/picks',
    name: 'PicksView',
    component: PicksView
  },
  {
    path: '/rug-radar',
    name: 'RugRadarView',
    component: RugRadarView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
