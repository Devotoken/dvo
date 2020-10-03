import Vue from 'vue';
import '@/scss/site.scss';
/*eslint-disable */
import App from './App';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta'

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
