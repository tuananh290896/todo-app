require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from "./router";
import store from "./store";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@styles/app.scss';
import consts from './plugins/constants';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.use(Antd);
Vue.use(consts);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});