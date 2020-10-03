import Vue from 'vue';
import '@/scss/site.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
