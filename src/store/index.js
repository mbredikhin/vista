import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import quick from './modules/quick';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    quick,
  },
});
