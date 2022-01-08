import { createStore } from "vuex";
import persistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [
    persistedState({ storage: window.sessionStorage })
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
