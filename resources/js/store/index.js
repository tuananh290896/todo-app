import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.module';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    auth
  },
  strict: debug
});

export default store;