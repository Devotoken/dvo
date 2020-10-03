import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
// import DAOView from '../views/DAOView';
// import PicksView from '../views/PicksView';
// import RugRadarView from '../views/RugRadarView';
// import AboutView from '../views/AboutView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  // {
  //   path: '/dao',
  //   name: 'AboutView',
  // },
  // {
  //   path: '/about',
  //   name: 'AboutView',
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
