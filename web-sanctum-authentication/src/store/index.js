import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    auth: false,
    loading: false
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
      state.auth = Boolean(payload);
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async login({ dispatch, commit }, form) {
      commit('SET_LOADING', true);
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', form);
      await dispatch('getUser');
      await router.push({name: 'Home'})
    },
    async register({ dispatch, commit }, form) {
      commit('SET_LOADING', true);
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/register', form);
      await dispatch('getUser');
      await router.push({name: 'Home'})
    },
    async logout({ dispatch, commit }, form) {
      commit('SET_LOADING', true);
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/logout')
      await dispatch('getUser');
      router.push({name: 'Login'})
    },
    async getUser({ commit }) {
      await axios
        .get("/api/user",{withCredentials: true})
        .then(res => {
          commit('SET_USER', res.data)
        })
        .catch(() => {
          commit('SET_USER', null)
        })
        .finally(() => {
          commit('SET_LOADING', false);
        })
    },
  },
  modules: {
  }
})
