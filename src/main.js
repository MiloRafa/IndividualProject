import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Form from './components/Form'
import VueRouter from 'vue-router'
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
vue.use(VueRouter);

const routes = [
  {path: '/form', component: Form}

];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
