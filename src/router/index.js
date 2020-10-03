import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DAOView from '../views/DAOView.vue';
import PicksView from '../views/PicksView.vue';
import RugRadarView from '../views/RugRadarView.vue';
import AboutView from '../views/AboutView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/dao',
    name: 'AboutView',
  },
  {
    path: '/about',
    name: 'AboutView',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
